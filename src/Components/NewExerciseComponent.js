import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';

const NewExerciseComponent = ({onNewExerciseRequest, currentNewExerciseRequest}) => {
    let newExerciseRequestData = {};

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
            <div className={'firstLine'}>
                <div>
                    New exercise
                </div>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            </div>
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
            <div className={"footerIn"}>
                <div className={"footerInlinks"}>
                    <div>
                        DASHBOARD
                    </div>
                    <div>
                        NEW EXERCISE
                    </div>
                    <div>
                        EDIT EXERCISE
                    </div>
                    <div>
                        NEW WORKOUT
                    </div>
                    <div>
                        EDIT WORKOUT
                    </div>
                </div>
                <div>
                    &#169; 2019 Alex Kurilo, made with love for a better web
                </div>
            </div>
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