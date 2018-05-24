import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AsyncComponent from '@/common/components/AsyncComponent';
import App from '../components/App';

export default (props) => {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/search" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/statistic" component={AsyncComponent(() => import('../components/Statistic'))} />
                    <Route exact path="/analysis" component={AsyncComponent(() => import('../components/Analysis'))} />
                    <Route exact path="/tool" component={AsyncComponent(() => import('../components/Tool'))} />
                    <Route exact path="/thematic" component={AsyncComponent(() => import('../components/Thematic'))} />
                    <Route exact path="/correct" component={AsyncComponent(() => import('../components/Correct'))} />
                </Switch>
            </App>
        </HashRouter>
    );
}