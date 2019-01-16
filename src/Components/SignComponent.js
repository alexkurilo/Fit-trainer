import React, { Component }  from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';

import InComponent from "./InComponent";
import UpComponent from "./UpComponent";
import EmailVerificationComponent from "./EmailVerificationComponent";

const SignComponent = ({}) => {
    return(
        <div className={'myPage'}>
            <div className={'SideBar'}>
                <div className={'Header'}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <div >
                        FIT TRAINER
                    </div>
                </div>
                <hr/>
                <div className={'button'}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
                    <div >
                        Sign in
                    </div>
                </div>
                <div className={'button'}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
                    <div >
                        Sign up
                    </div>
                </div>
            </div>
            <div className={"Component"}>
                <InComponent/>
                {/*<InComponent/>
                <UpComponent/>
                <EmailVerificationComponent/>*/}
            </div>
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(SignComponent);