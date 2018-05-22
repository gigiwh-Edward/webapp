import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AsyncComponent from '../components/AsyncComponent';
import App from '../components/App';

export default (props) => {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={AsyncComponent(() => import('../components/MapView'))} />
                    <Route exact path="/search" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/statistic" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/analysis" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/tool" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/model" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/correct" component={AsyncComponent(() => import('../components/Search'))} />
                </Switch>
            </App>
        </HashRouter>
    );
}