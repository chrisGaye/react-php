import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome';
//import Home from '././components/Home/Home';
//import Login from '././components/Login/Login';
//import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound';
import Signup from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;