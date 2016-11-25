import React from 'react';
import { DragSource } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.2rem 0.4rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
  paddingLeft: '10px'
};

const Types = {
  STUDENT: 'student'
};

const studentSource = {
  beginDrag(props) {
    console.log("STUDENT: beginDrag");
    const item = {
      id: props.id,
      name: props.name
    };

    return item;
  },

  endDrag(props, monitor) {
    console.log("STUDENT: endDrag");

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      // window.alert(
      //   `STUDENT: You dropped ${item.name} (${item.id}) into group ${dropResult.id}`
      // );
    }

    // StudentActions.moveStudentToGroup(item.id, dropResult.groupId);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Student extends React.Component {
  render() {
    const { id, name } = this.props;

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <div style={{ ...style, opacity }}>
        <p style={{margin: 5}}>{name} ({id})</p>
      </div>
    );
  }
}

export default DragSource(Types.STUDENT, studentSource, collect)(Student);
