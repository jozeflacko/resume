import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as promiseMiddleware from 'redux-promise';
import reducers from './reducers';

import MyIndex from './containers/index/index';
import Home from './containers/home/home';
import Results from './containers/results/results';

import Links from './links/links';

const createReduxStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class App extends React.Component {
  render() {
    return (
       <Provider store={createReduxStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path={Links.RESUME_FOR_GOOGLE_DETAILS} component={Results} />
              <Route path={Links.RESUME_FOR_GOOGLE} component={Home}/>
              
              <Route path={Links.RESUME_DETAILS} component={Results}/>
              <Route path={Links.RESUME} component={Home} />
              
              <Route path={Links.INDEX} component={MyIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
