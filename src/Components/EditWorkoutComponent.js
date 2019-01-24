import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandartNumber from './TextFieldsStandartNumber';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";
import NativeSelects from "./NativeSelects";

const EditWorkautComponent = ({exercisesList, currentWorkoutWithDate, onChangeNameAndType, onChangeRepeats, onChangeMeasurements, onChangeTop, onChangeBottom, onDeleteExercise, onAddNewStringExercise }) => {
    let namePage = "Edit workout";
    let numberInOrder = 1;
    let selectedDate = [20190101, 20190102, 20190103];
    let target = currentWorkoutWithDate[numberInOrder].exercises;
    
    const HandleApdateWorkoutButton = () => {
        console.log(currentWorkoutWithDate);
    };

    const addNewStringWorkout = () => {
        onAddNewStringExercise(numberInOrder);
    };

    const ReadNewExerciseName = (event, index) => {
        for (let i=0; i < exercisesList.length; i++){
            if (exercisesList[i].exercisesName === event.target.value) {
                onChangeNameAndType([event.target.value, index, numberInOrder, exercisesList[i].measurementType, i]);
            };
        };
    };

    const ReadRepeatsField = (value, index) => {
        onChangeRepeats([value, index, numberInOrder]);
    };

    const ReadMeasurementField = (value, index) => {
        onChangeMeasurements([value, index, numberInOrder]);
    };

    const onClickTop = (index) => {
        onChangeTop([index, numberInOrder]);
    };

    const onClickBottom = (index) => {
        onChangeBottom([index, numberInOrder]);
    };

    const onClickDelete = (index) => {
        onDeleteExercise([index, numberInOrder]);
    };

    const mapComponent = () => {
        
        if (target.length !== 0){
            console.log([...target]);
            return (
                target.map((item, index) => {
                    //console.log({...{["item"+index]:item}})
                    return (
                        <div key={index}
                            className={"stringData"}>
                            <NativeSelects
                                            onReadField={(event) => ReadNewExerciseName(event, index)}
                                            value = {item.exercisesName}
                                            placeholder={"Exercise Name"}
                                            data = {exercisesList}
                            />
                            <TextFieldsStandartNumber     
                                                    onReadField={(event) => ReadRepeatsField(event, index)}
                                                    value = {item.repeats}
                                                    placeholder={"Repeats"}
                            /> 
                            <TextFieldsStandartNumber     
                                                    onReadField={(event) => ReadMeasurementField(event, index)}
                                                    value = {item.measurements}
                                                    placeholder={"Measurement"}
                            />
                            <div className={"measurementType"}>
                                {item.measurementType}
                            </div>
                            <ButtonTurquoise    index = {index}
                                                onHandleClick = {onClickTop}
                                                imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/up.png"}
                            />
                            <ButtonTurquoise    index = {index}
                                                onHandleClick = {onClickBottom}
                                                imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/down.png"}
                            />
                            <ButtonYellow   index = {index}
                                            onHandleClick={onClickDelete}
                                            imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/delete-sign.png"}
                            />
                        </div>
                    )
                })
                 
            ) 
        }
    };

    const visibleButtonCreateWorkout = () => {
        if (target.length !== 0){
            return (
                <PinkButton  HandleSignInButton={HandleApdateWorkoutButton}
                            label={"UPDATE WORKOUT"}
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
                <div>
                    List of exercises for {selectedDate[0]}
                </div>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            </div>
            <div className={"signWindow"}>
                <div className={"signHeader"}>
                    <h3>{namePage}</h3>
                </div>
                <div className={"signBody"}>
                    <PinkButton  
                                HandleSignInButton={addNewStringWorkout}
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
        exercisesList: state.currentEditExercisesRequest,
        currentWorkoutWithDate: state.currentWorkoutWithDate
    }),

    dispatch => ({
        onAddNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_WORKOUT', payload})
        },
        onChangeNameAndType: (data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_NAME_AND_TYPE', payload})
        },
        onChangeRepeats: (data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_REPEATS', payload})
        },
        onChangeMeasurements: (data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_MEASUREMENTS', payload})
        },
        onChangeTop:(data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_TOP', payload})
        },
        onChangeBottom:(data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_BOTTOM', payload})
        },
        onDeleteExercise:(data) => {
            const payload = data;
            dispatch ({type: 'DELETE_EXERCISE', payload})
        },
        onAddNewStringExercise: (data)=> {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_EXERCISE', payload})
        },
    })
)(EditWorkautComponent);