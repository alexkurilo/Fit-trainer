import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from "react-router-dom";

import TextFieldDisabled from './TextFieldDisabled';
import TextField from './TextFieldsStandart';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import firebase from 'firebase';
import {config} from '../Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class EmailVerificationComponent extends Component{
    singleRegistrationCode = "";
    namePage = "Email verification";
    HandleSignInButton = () => {
        if (+this.props.currentUserSignUpData.singleRegistrationCode === +this.singleRegistrationCode){
            firebase.database().ref("/").child(this.props.usersArray.length).set({
                email: this.props.currentUserSignUpData.email,
                password: this.props.currentUserSignUpData.pass,
                id: this.props.usersArray.length
            });
            this.props.history.push("/sign in");
        }
    };

    ReadField = (value) => {
        this.singleRegistrationCode = value;
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
                        <TextFieldDisabled defaultvalue ={this.props.currentUserSignUpData.email}/>
                        <TextField placeholder={"VerificationCode"} onreadfield={this.ReadField}/>
                        <PinkButton  handlesigninbutton={this.HandleSignInButton}
                                     label={"SIGN UP"}
                        />
                        <Link   to="/sign in"
                                className={"link"}>
                            alredy have an account? sign-in
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
        currentUserSignUpData: state.currentUserSignUpData,
        usersArray: state.usersArray
    })
)(EmailVerificationComponent));