import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from "react-router-dom";

import TextFieldDisabled from './TextFieldDisabled';
import TextFieldsDense from './TextFieldsDense';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class EmailVerificationComponent extends Component{
    
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
                        <TextFieldsDense reademail={""}/>
                        
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
    }),

    dispatch => ({

    })
)(EmailVerificationComponent));