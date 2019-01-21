import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//import logo from './logo.svg';

import SignComponent from "./Components/SignComponent";
import InComponent from "./Components/InComponent";
import UsersWorcoutComponent from "./Components/UsersWorcoutComponent";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    {/* <Route exact path = '/' component = {SignComponent} /> */}
                    <Route path = '/' component = {UsersWorcoutComponent} />
                </Switch>
            </div>
        );
    }
}

export default App;
{/*<Route path = '/SignUp' component = {SignUpPage} />
<Route path = '/Dashboard' component = {DashboardPage} />*/}