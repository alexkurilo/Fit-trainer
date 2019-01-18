import React from 'react';
import {connect} from 'react-redux';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';

const InComponent = ({currntUserSignInData, onEntryRequest}) => {
    let signInRequestData = {};

    const ReadEmail = (value) => {
        signInRequestData.email = value;
    };

    const ReadPass = (value) => {
        signInRequestData.pass = value;
    };

    const HandleSignInButton = () => {
        console.log(signInRequestData);
        onEntryRequest(signInRequestData);
        if (signInRequestData.email == undefined || signInRequestData.pass == undefined || signInRequestData.repeatPass == undefined) alert("Please fill all the fields");
        else onEntryRequest(signInRequestData);
    };

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
                    <TextFieldsDense ReadEmail={ReadEmail}/>
                    <TextFieldsPassword ReadInput={ReadPass}
                                        plaseholder ={"Password"}
                    />
                    <PinkButton  HandleSignInButton={HandleSignInButton}
                                label={"SIGN IN"}
                    />
                    <div className={"signUpLink"}>first time user? sign-up</div>
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
                    2019 Alex Kurilo, made with love for a better web
                </div>
            </div>
        </div>
    );
};


export default connect(
    (state) => ({
        currntUserSignInData: state.currntUserSignInData,
    }),

    dispatch => ({
        onEntryRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST', payload})
        },
    })
)(InComponent);