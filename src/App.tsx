import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Global, global} from "./context/global";

import Home from './pages/home/home';
import Results from './pages/results/results';
import Links from './links/links';

export default class App extends React.Component {
    render() {
        return (
            <Global.Provider value={global}>
                <BrowserRouter>
                    <Switch>
                        <Route path={Links.CONTENT} component={Results}/>
                        <Route path={Links.INDEX} exact={true} component={Home}/>
                    </Switch>
                </BrowserRouter>
            </Global.Provider>
        );
    }
}
