import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import TextFieldsDense from './TextFieldsDense';
import TextFieldsPassword from './TextFieldsPassword';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterSignComponent from "./FooterSignComponent";

class InComponent extends Component {
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
        this.props.onClearExercises();
        this.props.onClearWorkout();
        this.props.onClearNewExercise();
        this.props.onClearNewWorkout();
        this.props.onClearSelectDate();
        this.props.onClearSelectedDates();
        this.props.onClearEntryRequest();
    }
    signInRequestData = {};
    namePage = "Sign in";
    userData = {};

    ReadEmail = (value) => {
        this.signInRequestData.email = value;
    };

    ReadPass = (value) => {
        this.signInRequestData.pass = value;
    };

    HandleSignInButton = () => {
        let data = this.signInRequestData;
        if (data.email === undefined || data.pass === undefined || data.email === "" || data.pass === "") {
            alert("Please fill all the fields");
        }else {
            this.props.usersArray.forEach((item, index)=> {
                if (this.signInRequestData.email === item.email && this.signInRequestData.pass === item.pass){
                    this.props.history.push("/user/"+ item.email+"/dashboard");
                    this.props.onEntryRequest({...item, id:index});
                }
            });
        }
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
                <FooterSignComponent/>
            </div>
        );
    }
};


export default withRouter(connect(
    (state) => ({
        currentUserSignInData: state.currentUserSignInData,
        currentNamePage: state.currentNamePage,
        usersArray: state.usersArray
    }),

    dispatch => ({
        onEntryRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ENTRY_REQUEST', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        },
        onClearExercises:() => {
            dispatch({type: 'CLEAR_EXERCISES'})
        },
        onClearWorkout:() => {
            dispatch({type: 'CLEAR_WORKOUT'})
        },
        onClearNewExercise:() => {
            dispatch({type: 'CLEAR_NEW_EXERCISE'})
        },
        onClearNewWorkout:() => {
            dispatch({type: 'CLEAR_NEW_WORKOUT'})
        },
        onClearSelectDate:() => {
            dispatch({type: 'CLEAR_SELECT_DATE'})
        },
        onClearSelectedDates:() => {
            dispatch({type: 'CLEAR_SELECTED_DATES'})
        },
        onClearEntryRequest:() => {
            dispatch({type: 'CLEAR_ENTRY_REQUEST'})
        }
    })
)(InComponent));





        