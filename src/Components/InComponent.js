import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';

class InComponent extends Component {
    constructor(props) {
        super(props);
        this.ReadEmail = this.ReadEmail.bind(this);
        this.ReadPass = this.ReadPass.bind(this);
        this.HandleSignInButton = this.HandleSignInButton.bind(this);
    }
    signInRequestData = {};

    ReadEmail = (value) => {
        this.props.signInRequestData.email = value;
    };

    ReadPass = (value) => {
        this.props.signInRequestData.pass = value;
    };

    HandleSignInButton = () => {
        console.log(this.signInRequestData);
        console.log( this.props.history.location.pathname);
        this.props.history.push("/user/dashboard");
        //onEntryRequest(signInRequestData);
        if (this.signInRequestData.email === undefined || this.signInRequestData.pass === undefined || this.signInRequestData.repeatPass === undefined) alert("Please fill all the fields");
        else this.props.onEntryRequest(this.signInRequestData);
        
    };

    render(){
        return(
            <div className={'inComponent'}>
                <div className={'firstLine'}>
                    <div>
                        Sign in
                    </div>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
                </div>
                <div className={"signWindow"}>
                    <div className={"signHeader"}>
                        <h3>Sign into Fit Trainer App</h3>
                        <section>Please, enteryour email and password</section>
                    </div>
                    <div className={"signBody"}>
                        <TextFieldsDense ReadEmail={this.ReadEmail}/>
                        <TextFieldsPassword ReadInput={this.ReadPass}
                                            plaseholder ={"Password"}
                        />
                        <PinkButton  HandleSignInButton={this.HandleSignInButton}
                                    label={"SIGN IN"}
                        />
                        <Link   to="/sign up"
                            className={"link"}>
                            first time user? sign-up
                        </Link>
                    </div>
                </div>
                <div className={"footerIn"}>
                    <div className={"footerInlinks"}>
                        <div>
                            SIGN IN
                        </div>
                        <div>
                            SIGN UP
                        </div>
                    </div>
                    <div>
                        &#169; 2019 Alex Kurilo, made with love for a better web
                    </div>
                </div>
            </div>
        );
    }
};


export default withRouter(connect(
    (state) => ({
        currntUserSignInData: state.currntUserSignInData,
    }),

    dispatch => ({
        onEntryRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST', payload})
        },
    })
)(InComponent));