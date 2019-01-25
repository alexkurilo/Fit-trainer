import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import { Switch, Route, Link } from 'react-router-dom';

import ButtonTurquoise from "./ButtonTurquoise";
import InComponent from "./InComponent";
import UpComponent from "./UpComponent";

const SignComponent = () => {
    const handleSignIn = (event) => {
        console.log("sign in ");
        console.log(event);
    };

    const handleSignUp = (event) => {
        console.log("sign up ");
        console.log(event);
    };

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
                <Link   to="/sign in"
                        className={"link"}>
                    <ButtonTurquoise label = {"Sign in"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/sign up"
                        className={"link"}>
                    <ButtonTurquoise label = {"Sign up"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                
            </div>
            <div className={"Component"}>
                {/* <InComponent/> */}
                <Switch>
                    <Route path="/sign in" component = {InComponent} />
                    <Route path="/sign up" component = {UpComponent} />
                </Switch>
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