import React from 'react';
import { render } from 'react-dom';
var isMobile = require('./utils/isMobile');
import App from './components/App.jsx';

window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
}, false);

if (isMobile()) {
  React.initializeTouchEvents(true);
}

render(
  <App />,
  document.getElementById('app')
);
