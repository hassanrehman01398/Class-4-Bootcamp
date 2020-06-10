import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //giving properties
  <div><App name="Muhammad HASSAN" age={20}/></div>,
  //react convert html into js thats why react is love
//  React.createElement('div',null,React.createElement('span',null,'hell is this ')),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
