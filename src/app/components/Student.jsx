import React from 'react';
import { DragSource } from 'react-dnd';

const style = {
  padding: '0.2rem 0.4rem',
  marginBottom: '.8rem',
  cursor: 'move',
  padding: '10px'
};

const img = {
  borderRadius: '50%'
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
      <div className="box" style={style}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-45x45">
              <img style={img} src="http://placehold.it/45x45" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name} ({id})</strong>
                <br />
                <small>@{name} {id}{id}{id}{id}{id}{id}{id}{id}</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default DragSource(Types.STUDENT, studentSource, collect)(Student);
