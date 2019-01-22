import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectExercisesNative from './TextFieldSelectExercisesNative';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";

const NewWorkoutComponent = ({currentEditExercisesRequest, currentNewWorkoutRequest, onAddNewStringWorkout, onFillNewStringWorkout}) => {
    let namePage = "New workout";
    let target;
    
    const ReadNewExerciseName = (value) => {
        //newExerciseRequestData.ExerciseName = value;
        onFillNewStringWorkout(value);
        console.log(value);
        target = value;
        console.log(target);
    };

    const showMeasurementType = (target) => {
        console.log(target);
        for (let i=0; i < currentEditExercisesRequest.length; i++){
            if (currentEditExercisesRequest[i].exercisesName === target){
                console.log(target);
                console.log(currentEditExercisesRequest[i].measurementType);
                return<div>{currentEditExercisesRequest[i].measurementType}</div>
            }
        }
    };

    const addNewStringWorkout = () => {
        console.log("addNewStringWorkout is worked");
        onAddNewStringWorkout(currentNewWorkoutRequest);
    };

    const readIndex = (index) => {
        console.log(index);
    };

    const mapComponent = () => {
        if (currentNewWorkoutRequest.length !== 0){
            return (
                currentNewWorkoutRequest.map((item, index) => {
                    //console.log({...{["item"+index]:item}})
                    return <div key={index}
                            className={"stringData"}>
                        <TextFieldsSelectExercisesNative 
                                                onReadField={(event) => ReadNewExerciseName(event, index)}
                                                value = {item.exercisesName}
                                                placeholder={"Exercise Name"}
                                                data = {currentEditExercisesRequest}
                                                readIndex = {readIndex}
                        /> 
                        <TextFieldsStandart     
                                                //onReadField={(event) => ReadEditExerciseName(event, index)}
                                                //value = {item.exercisesName}
                                                placeholder={"Repeats"}
                        /> 
                        <TextFieldsStandart     
                                                //onReadField={(event) => ReadEditExerciseName(event, index)}
                                                //value = {item.exercisesName}
                                                placeholder={"Measurement"}
                        />
                        {showMeasurementType(target)}
                        <ButtonTurquoise    index = {index}
                                            //onHandleClick = {onClickTop}
                                            imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/up.png"}
                        />
                        <ButtonTurquoise    index = {index}
                                            //onHandleClick = {onClickBottom}
                                            imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/down.png"}
                        />
                        <ButtonYellow   index = {index}
                                        //onHandleClick={onClickDelete}
                                        imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/delete-sign.png"}
                        />
                    </div>
                    }
                )
                 
            ) 
        }
    };

    const visibleButtonCreateWorkout = () => {
        if (currentNewWorkoutRequest.length !== 0){
            return (
                <PinkButton  //HandleSignInButton={currentNewWorkoutRequest}
                            label={"CREATE WORKOUT"}
                />
            )
        }
    }
    
    return(
        <div className={'inComponent'}>
            <div className={'firstLine'}>
                <div>
                    {namePage}
                </div>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            </div>
            <div className={"signWindow"}>
                <div className={"signHeader"}>
                    <h3>{namePage}</h3>
                </div>
                <div className={"signBody"}>
                    <PinkButton  HandleSignInButton={addNewStringWorkout}
                                label={"ADD EXERCISE"}
                    />
                    {mapComponent()}
                    {visibleButtonCreateWorkout()}
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
        currentEditExercisesRequest: state.currentEditExercisesRequest,
        currentNewWorkoutRequest: state.currentNewWorkoutRequest
    }),

    dispatch => ({
        onAddNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_WORKOUT', payload})
        },
        onFillNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'FILL_NEW_STRING_WORKOUT', payload})
        }
    })
)(NewWorkoutComponent);