import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as promiseMiddleware from 'redux-promise';
import reducers from './reducers';

import MyIndex from './containers/index/index';
import Home from './containers/home/home';
import Results from './containers/results/results';

const createReduxStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class App extends React.Component {
  render() {
    return (
       <Provider store={createReduxStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/resumeforgoogle/details" component={Results} />
              <Route path="/resumeforgoogle" component={Home} />
              <Route path="/" component={MyIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
