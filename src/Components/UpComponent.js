import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from "react-router-dom";

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class UpComponent extends Component{
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
    }
    signInRequestData = {};
    namePage = "Sign up";

    ReadEmail = (value) => {
        this.signInRequestData.email = value;
    };

    ReadPass = (value) => {
        this.signInRequestData.pass = value;
    };

    ReadRepeatPass = (value) => {
        this.signInRequestData.repeatPass = value;
    };

    HandleSignInButton = () => {
        console.log(this.signInRequestData.email);
        console.log(this.signInRequestData.pass);
        console.log(this.signInRequestData.repeatPass);
        console.log(this.props);
        this.props.history.push("/user/sign in");
        if (this.signInRequestData.email === undefined || this.signInRequestData.pass === undefined || this.signInRequestData.repeatPass === undefined) alert("Please fill all the fields");
        else if (this.signInRequestData.repeatPass !== this.signInRequestData.pass) alert("Passwords do not match");
        else this.props.onEntryRequestUp(this.signInRequestData);
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
                        <TextFieldsPassword readinput={this.ReadRepeatPass}
                                            plaseholder ={"Repeat Password"}
                        />
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
        currntUserSignUpData: state.currntUserSignUpData,
        currentNamePage: state.currentNamePage
    }),

    dispatch => ({
        onEntryRequestUp: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST_UP', payload})
        },
        onEntryRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(UpComponent));