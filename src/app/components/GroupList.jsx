import React from 'react';
import Group from './Group.jsx';

const style = {
  height: '100%',
  backgroundColor: '#DDD',
  padding: '10px',
  overflow: 'scroll'
};

class GroupList extends React.Component {
  render() {
    return (
      <div style={style}>
        <Group id={1} />
        <Group id={2} />
        <Group id={3} />
        <Group id={4} />
        <Group id={5} />
        <Group id={6} />
      </div>
    );
  }
}

export default GroupList;
