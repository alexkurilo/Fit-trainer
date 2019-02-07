import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import SignComponent from "./Components/SignComponent";
import UsersWorcoutComponent from "./Components/UsersWorcoutComponent";
import './App.css';

class App extends Component {
    componentWillMount ( ) {
        if (this.props.history.location.pathname === "/")this.props.history.push("/sign in");
        if (this.props.history.location.pathname === "/user/:user")this.props.history.push("/user/:user/dashboard");
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exsact path = '/user/:user' component = {UsersWorcoutComponent} />
                    <Route path = '/' component = {SignComponent}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
