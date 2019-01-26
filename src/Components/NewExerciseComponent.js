import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class NewExerciseComponent extends Component {
    componentWillMount ( ) {
        console.log(this.namePage);
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
        this.props.history.push("/user/dashboard");
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
                        <TextFieldsStandart onReadField={this.ReadExerciseName}
                                            placeholder={"Exercise Name"}
                        />
                        <TextFieldsSelectNative onReadField={this.ReadMeasurementType}
                                                placeholder ={"Measurement Type"}
                        />
                        <PinkButton  HandleSignInButton={this.HandleCreateExerciseButton}
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
        currentNamePage: state.currentNamePage
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