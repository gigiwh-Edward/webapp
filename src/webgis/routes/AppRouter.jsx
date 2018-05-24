import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AsyncComponent from '@/common/components/AsyncComponent';
import App from '../components/App';

export default (props) => {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/" component={null} />
                    <Route path="/search" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route path="/statistic" component={AsyncComponent(() => import('../components/Statistic'))} />
                    <Route path="/analysis" component={AsyncComponent(() => import('../components/Analysis'))} />
                    <Route path="/tool" component={AsyncComponent(() => import('../components/Tool'))} />
                    <Route path="/thematic" component={AsyncComponent(() => import('../components/Thematic'))} />
                    <Route path="/correct" component={AsyncComponent(() => import('../components/Correct'))} />
                </Switch>
            </App>
        </HashRouter>
    );
}