import React from 'react';
import {connect} from 'react-redux';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';

const InComponent = ({}) => {

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
                    <TextFieldsDense/>
                    <TextFieldsPassword/>
                    <PinkButton/>
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

    }),

    dispatch => ({

    })
)(InComponent);