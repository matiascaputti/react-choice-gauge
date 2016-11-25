import React from 'react';
import { render } from 'react-dom';
import DragContainer from './components/DragContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <DragContainer />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
