import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';

import SignComponent from "./Components/SignComponent";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path = '/' component = {SignComponent} />
                    {/*<Route path = '/SignUp' component = {SignUpPage} />
          <Route path = '/Dashboard' component = {DashboardPage} />*/}
                </ Switch>
            </div>
        );
    }
}

export default App;