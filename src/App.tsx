import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import * as promiseMiddleware from 'redux-promise';
import reducers from './reducers';

import Home from './containers/home/home';
import Results from './containers/results/results';
import Links from './links/links';

const createReduxStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createReduxStoreWithMiddleware(reducers)}>
                <BrowserRouter>
                    <Switch>
                        <Route path={Links.CONTENT} component={Results}/>
                        <Route path={Links.INDEX} exact={true} component={Home}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
