import React from 'react';
import Student from './Student.jsx';

const style = {
  width: '10rem',
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
        <Student id={1} name={'John Doe'} />
        <Student id={2} name={'Peter Crawn'} />
        <Student id={3} name={'Chris Rider'} />
        <Student id={4} name={'Moe Script'} />
        <Student id={5} name={'John Doe'} />
        <Student id={6} name={'Peter Crawn'} />
        <Student id={7} name={'Chris Rider'} />
        <Student id={8} name={'Moe Script'} />
        <Student id={9} name={'John Doe'} />
        <Student id={10} name={'Peter Crawn'} />
        <Student id={11} name={'Chris Rider'} />
        <Student id={12} name={'Moe Script'} />
      </div>
    );
  }
}

export default StudentList;
