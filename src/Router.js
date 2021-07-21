import React from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Admin from './pages/admin'

const Router = () => {
    return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/admin' component={Admin} />
            </Switch>
    )
}
export default Router;
