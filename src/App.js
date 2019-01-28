import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import SignComponent from "./Components/SignComponent";
import UsersWorcoutComponent from "./Components/UsersWorcoutComponent";
import './App.css';

import firebase from 'firebase';
import {config} from './Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class App extends Component {
    componentWillMount ( ) {
        let myThis = this;
        if (this.props.history.location.pathname === "/")this.props.history.push("/sign in");
        if (this.props.history.location.pathname === "/user/:user")this.props.history.push("/user/:user/dashboard");
        let ref = firebase.database().ref('/');
        ref.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                let childData = childSnapshot.val();
                myThis.usersArr.push({email:childData.email, pass: childData.password, name: childData.name});
                if (JSON.stringify(myThis.usersArr) !== JSON.stringify(myThis.props.usersArray) || myThis.props.usersArray.length === 0 ){
                    myThis.props.onEntryUsersArray(myThis.usersArr);
                }
            });
        });
    }
    usersArr = [];

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

export default withRouter(connect(
    (state) => ({
        usersArray: state.usersArray
    }),

    dispatch => ({
        onEntryUsersArray: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_USERS_ARRAY', payload})
        }
    })
)(App));
