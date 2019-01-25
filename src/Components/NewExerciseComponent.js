import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const NewExerciseComponent = ({onNewExerciseRequest, currentNewExerciseRequest}) => {
    let newExerciseRequestData = {};
    let namePage = "New Exercise";

    const ReadExerciseName = (value) => {
        newExerciseRequestData.ExerciseName = value;
    };

    const ReadMeasurementType = (value) => {
        newExerciseRequestData.MeasurementType = value;
    };

    const HandleCreateExerciseButton = () => {
        onNewExerciseRequest(newExerciseRequestData);
    };

    return(
        <div className={'inComponent'}>
            <HeaderComponent namePage = {namePage}/>
            <div className={"signWindow"}>
                <div className={"signHeader"}>
                    <h3>Create new exercise</h3>
                    <section>Please, add a new exercise name and measurement measurement type</section>
                </div>
                <div className={"signBody"}>
                    <TextFieldsStandart onReadField={ReadExerciseName}
                                        placeholder={"Exercise Name"}
                    />
                    <TextFieldsSelectNative onReadField={ReadMeasurementType}
                                            placeholder ={"Measurement Type"}
                    />
                    <PinkButton  HandleSignInButton={HandleCreateExerciseButton}
                                label={"CREATE EXERCISE"}
                    />
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
};


export default connect(
    (state) => ({
        currentNewExerciseRequest: state.currentNewExerciseRequest
    }),

    dispatch => ({
        onNewExerciseRequest: (data) => {
            const payload = data;
            dispatch ({type: 'NEW_EXERCISE_REQUEST', payload})
        },
    })
)(NewExerciseComponent);