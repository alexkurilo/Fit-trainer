import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import firebase from 'firebase';
import {config} from '../Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class NewExerciseComponent extends Component {
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
    };

    newExerciseRequestData = {};
    namePage = "New Exercise";

    ReadExerciseName = (value) => {
        this.newExerciseRequestData.exercisesName = value;
    };

    ReadMeasurementType = (value) => {
        this.newExerciseRequestData.measurementType = value;
    };

    HandleCreateExerciseButton = () => {
        this.props.onNewExerciseRequest(this.newExerciseRequestData);
        this.props.onAddNewExerciseRequest(this.newExerciseRequestData);
        this.props.history.push("/user/"+(this.props.currentUserSignInData.email)+"/dashboard");
        console.log(this.props.currentEditExercisesRequest);
        firebase.database().ref("/").child(this.props.currentUserSignInData.id).child("exercises").child(this.props.currentEditExercisesRequest.length).set(this.newExerciseRequestData);
    };

    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}/>
                <div className={"signWindow"}>
                    <div className={"signHeader"}>
                        <h3>Create new exercise</h3>
                        <section>Please, add a new exercise name and measurement measurement type</section>
                    </div>
                    <div className={"signBody"}>
                        <TextFieldsStandart onreadfield={this.ReadExerciseName}
                                            placeholder={"Exercise Name"}
                        />
                        <TextFieldsSelectNative onreadfield={this.ReadMeasurementType}
                                                placeholder ={"Measurement Type"}
                        />
                        <PinkButton  handlesigninbutton={this.HandleCreateExerciseButton}
                                     label={"CREATE EXERCISE"}
                        />
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
};


export default withRouter(connect(
    (state) => ({
        currentNewExerciseRequest: state.currentNewExerciseRequest,
        currentNamePage: state.currentNamePage,
        currentUserSignInData: state.currentUserSignInData,
        currentEditExercisesRequest: state.currentEditExercisesRequest
    }),

    dispatch => ({
        onNewExerciseRequest: (data) => {
            const payload = data;
            dispatch ({type: 'NEW_EXERCISE_REQUEST', payload})
        },
        onAddNewExerciseRequest: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_EXERCISE', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(NewExerciseComponent));