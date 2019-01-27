import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class InComponent extends Component {
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
    }

    signInRequestData = {};
    namePage = "Sign in";

    ReadEmail = (value) => {
        this.props.currentUserSignInData.email = value;
    };

    ReadPass = (value) => {
        this.props.currentUserSignInData.pass = value;
    };

    HandleSignInButton = () => {
        console.log(this.signInRequestData);
        console.log( this.props.history.location.pathname);
        this.props.history.push("/user/dashboard");
        if (this.signInRequestData.email === undefined || this.signInRequestData.pass === undefined || this.signInRequestData.repeatPass === undefined) alert("Please fill all the fields");
        else this.props.onEntryRequest(this.signInRequestData);
        
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
        currentNamePage: state.currentNamePage
    }),

    dispatch => ({
        onEntryRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(InComponent));