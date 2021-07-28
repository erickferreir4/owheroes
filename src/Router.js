import React from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'


const Router = () => {
    return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/login' component={Login} />
            </Switch>
    )
}
export default Router;
