import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//import logo from './logo.svg';

import SignComponent from "./Components/SignComponent";
import InComponent from "./Components/InComponent";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path = '/' component = {SignComponent} >
                        {/* <Route path="/sign in" component = {InComponent} /> */}
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
{/*<Route path = '/SignUp' component = {SignUpPage} />
<Route path = '/Dashboard' component = {DashboardPage} />*/}