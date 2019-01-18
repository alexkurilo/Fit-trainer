import React from 'react';
import {connect} from 'react-redux';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';

const UpComponent = ({onEntryRequestUp}) => {
    let signInRequestData = {};

    const ReadEmail = (value) => {
        signInRequestData.email = value;
    };

    const ReadPass = (value) => {
        signInRequestData.pass = value;
    };

    const ReadRepeatPass = (value) => {
        signInRequestData.repeatPass = value;
    };

    const HandleSignInButton = () => {
        console.log(signInRequestData.email);
        console.log(signInRequestData.pass);
        console.log(signInRequestData.repeatPass);
        if (signInRequestData.email == undefined || signInRequestData.pass == undefined || signInRequestData.repeatPass == undefined) alert("Please fill all the fields");
        else if (signInRequestData.repeatPass !== signInRequestData.pass) alert("Passwords do not match");
        else onEntryRequestUp(signInRequestData);
    };

    return(
        <div className={'inComponent'}>
            <div className={'firstLine'}>
                <div>
                    Sign up
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
                    <TextFieldsPassword ReadInput={ReadRepeatPass}
                                        plaseholder ={"Repeat Password"}
                    />
                    <PinkButton  HandleSignInButton={HandleSignInButton}
                                label={"SIGN UP"}
                    />
                    <div className={"signUpLink"}>alredy have an account? sign-in</div>
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
        currntUserSignUpData: state.currntUserSignUpData,
    }),

    dispatch => ({
        onEntryRequestUp: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST_UP', payload})
        },
    })
)(UpComponent);