import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AsyncComponent from '@/common/components/AsyncComponent';
import App from '../components/App';

export default (props) => {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/svrlist" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/svrmonitor" component={AsyncComponent(() => import('../components/Search'))} />
                    
                    <Route exact path="/pipenetdata" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/thematicdata" component={AsyncComponent(() => import('../components/Search'))} />

                    <Route exact path="/vtdata" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/tradvtdata" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/onlinemapping" component={AsyncComponent(() => import('../components/Search'))} />

                    <Route exact path="/tdpipenet" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/tddem" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/tdbuilding" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/tdmodels" component={AsyncComponent(() => import('../components/Search'))} />

                    <Route exact path="/gdb1" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/gdb2" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/gdb3" component={AsyncComponent(() => import('../components/Search'))} />
                    <Route exact path="/gdb4" component={AsyncComponent(() => import('../components/Search'))} />
                </Switch>
            </App>
        </HashRouter>
    );
}