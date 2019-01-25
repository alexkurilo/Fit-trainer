import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import SignComponent from "./Components/SignComponent";
import UsersWorcoutComponent from "./Components/UsersWorcoutComponent";
import './App.css';

class App extends Component {
    componentWillMount() {
        console.log( this.props.history.location.pathname);
        if (this.props.history.location.pathname === "/")this.props.history.push("/sign in");
        if (this.props.history.location.pathname === "/user")this.props.history.push("/user/dashboard");
    }

    selectDay = (event) => {
        console.log(event);
    };

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path = '/user' component = {UsersWorcoutComponent} />
                    <Route path = '/' component = {SignComponent} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
