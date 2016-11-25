import React from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import { reject } from 'lodash';

const style = {
  color: '#FFF',
  backgroundColor: '#777',
  height: '12rem',
  width: '10rem',
  margin: '1.5rem',
  padding: '1rem',
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
          <p
            key={student.id}
            style={{fontWeight: '900'}}
          >
            {student.name} ({student.id})
            <span
              style={{color: '#d9534f', fontSize: 20, fontWeight: '900', marginLeft: '10px', cursor: 'pointer'}}
              onClick={(event) => this.removeStudent(student.id)}
            >
              x
            </span>
          </p>
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
      <div style={{ ...style, backgroundColor }}>
        <h3 style={{marginTop: 0, textAlign: 'center'}}>group {id}</h3>

        {this.groupStudents()}
      </div>
    );
  }
}

export default DropTarget(Types.STUDENT, groupTarget, collect)(Group);
