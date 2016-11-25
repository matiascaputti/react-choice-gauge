import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import StudentList from './StudentList.jsx';
import GroupList from './GroupList.jsx';

class DragContainer extends React.Component {
  render() {
    return (
      <div style={{
        height: '800px'
      }}>
        <StudentList />

        <GroupList />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragContainer);
