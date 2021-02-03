import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './funny.css';
//import {get} from './utils/HttpClient';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/*
// ping heroku links
get('http://perceptron-demo.jozeflacko.com/');
get('https://snake-game-javascript.herokuapp.com/');
get('http://flower-css.jozeflacko.com/');
get('http://hangman.jozeflacko.com/');
*/