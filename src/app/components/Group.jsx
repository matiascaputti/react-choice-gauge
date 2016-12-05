import React from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import { reject } from 'lodash';

const style = {
  width: '25rem',
  margin: '1rem',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};

const Types = {
  STUDENT: 'student'
};

const groupTarget = {
  drop(props, monitor, component) {
    const student = monitor.getItem();

    // window.alert(
    //   `GROUP: You dropped ${student.name} (${student.id}) into group ${props.id}`
    // );

    let students = component.state.students;
    students.push(student);
    component.setState({ students });

    return { id: props.id };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class Group extends React.Component {
  constructor(props) {
    super(props);

    this.state = { students: [] };

    this.removeStudent = this.removeStudent.bind(this);
  }

  groupStudents() {
    if (this.state.students.length) {
      return this.state.students.map(student => {
        return (
          <div>
            <div
              className="tag is-success is-medium"
              style={{ margin: 5 }}
              key={student.id}
            >
              <p>
                <b>{student.name} ({student.id})</b>
              </p>
              <button
                className="delete"
                onClick={(event) => this.removeStudent(student.id)}
              ></button>
            </div>
          </div>
        );
      });
    }

    return <i style={{color: '#999'}}>(empty group)</i>;
  }

  removeStudent(studentId) {
    const students = reject(this.state.students, {
      id: studentId
    });

    this.setState({ students });
  }

  render() {
    const { id, position } = this.props;

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isOver, canDrop, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div className={'message'} style={{ ...style }}>
        <div
          style={{marginTop: 0, textAlign: 'center'}}
          className={'message-header'}
        >
          <p
            style={{color: '#FFF', padding: '5px'}}
            className={'title danger'}
          >
            {`group ${id}`.toUpperCase()}
          </p>
        </div>
        <div
          style={{height: '14rem'}}
          className="message-body"
        >
          {this.groupStudents()}
        </div>
      </div>
    );
  }
}

export default DropTarget(Types.STUDENT, groupTarget, collect)(Group);
