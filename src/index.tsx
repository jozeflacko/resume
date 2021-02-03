import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './funny.css';
import {get} from './utils/HttpClient';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


// ping heroku links
get('https://ai-perceptron-demo.herokuapp.com/');
get('https://snake-game-javascript.herokuapp.com/');
get('https://flower-css.herokuapp.com/');
get('https://hangman-in-the-address-bar.herokuapp.com/');
