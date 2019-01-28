import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import firebase from 'firebase';
import {config} from '../Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


class InComponent extends Component {
    componentWillMount ( ) {
        let myThis = this;
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
        //this.props.onEntryRequest(this.signInRequestData);
        let ref = firebase.database().ref('/');
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    let childData = childSnapshot.val();
                    myThis.usersArr.push({email:childData.email, pass: childData.password, name: childData.name});
                    console.log(myThis.usersArr);
                    console.log(myThis.props.usersArr);
                    if (JSON.stringify(myThis.usersArr) !== JSON.stringify(myThis.props.usersArr) || myThis.props.usersArr.length=== 0 )myThis.props.onEntryUsersArray(myThis.usersArr);
                });
            });
    }

    usersArr = [];
    signInRequestData = {};
    namePage = "Sign in";

    ReadEmail = (value) => {
        this.signInRequestData.email = value;
        // console.log(this.signInRequestData);
    };

    ReadPass = (value) => {
        this.signInRequestData.pass = value;
        // console.log(this.signInRequestData);
    };

    HandleSignInButton = () => {
        let myThis = this;
        // console.log(this.usersArr);
        // console.log(this.signInRequestData);
        // console.log( this.props.history.location.pathname);
        //this.props.history.push("/user/dashboard");
        if (this.signInRequestData.email === undefined|| this.signInRequestData.pass === undefined) alert("Please fill all the fields");
        else {
            // if (this.signInRequestData.email === this.usersArr.email && this.signInRequestData.pass === this.usersArr.pass){
            //     this.props.onEntryRequest([this.usersArr.email, this.usersArr.pass, this.usersArr.name]);
            // }
            //this.props.onEntryRequest(this.signInRequestData);
            this.usersArr.forEach((item, index)=> {
                if (this.signInRequestData.email === item.email && this.signInRequestData.pass === item.pass){
                    this.props.onEntryRequest(item);
                }
            })
        }
        console.log(this.props.currentUserSignInData.email);
        this.props.history.push("/user/"+this.props.currentUserSignInData.email+"/dashboard");
        // if (this.props.currentUserSignInData.email === this.signInRequestData.email ){
        //     this.props.history.push("/user/"+this.props.currentUserSignInData.email+"/dashboard");
        // }else{
        //     this.props.history.push("/sign in");
        //     alert ("You entered invalid email or password, repeat again?")
        // }
    };

    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}/>
                <div className={"signWindow"}>
                    <div className={"signHeader"}>
                        <h3>Sign into Fit Trainer App</h3>
                        <section>Please, enteryour email and password</section>
                    </div>
                    <div className={"signBody"}>
                        <TextFieldsDense reademail={this.ReadEmail}/>
                        <TextFieldsPassword readinput={this.ReadPass}
                                            plaseholder ={"Password"}
                        />
                        <PinkButton  handlesigninbutton={this.HandleSignInButton}
                                    label={"SIGN IN"}
                        />
                        <Link   to="/sign up"
                            className={"link"}>
                            first time user? sign-up
                        </Link>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
};


export default withRouter(connect(
    (state) => ({
        currentUserSignInData: state.currntUserSignInData,
        currentNamePage: state.currentNamePage,
        usersArray: state.usersArray
    }),

    dispatch => ({
        onEntryRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST', payload})
        },
        onEntryUsersArray: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_USERS_ARRAY', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(InComponent));