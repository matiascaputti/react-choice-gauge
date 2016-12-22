import React from 'react';

const style = {
  width: '25rem',
  height: '100%',
  backgroundColor: '#EEE',
  float: 'left',
  overflow: 'scroll',
  padding: '20px'
};

class StudentList extends React.Component {
  render() {
    return (
      <div style={style}>
        <p className="title">Unassigned students</p>
      </div>
    );
  }
}

export default StudentList;
