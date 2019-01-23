import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandartNumber from './TextFieldsStandartNumber';
import TextFieldsSelectExercisesNative from './TextFieldSelectExercisesNative';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";
//import SimpleSelect from "./Select";

const EditWorkautComponent = ({currentExercises, currentWorkoutWithDate }) => {
    let namePage = "Edit workout";
    let selectedDate = [20190101, 20190102, 20190103];
    let target = currentWorkoutWithDate[2].exercises;
    
    const HandleApdateWorkoutButton = () => {
        console.log(currentWorkoutWithDate);
    };

    console.log(target);

    const mapComponent = () => {
        
        if (target.length !== 0){
            console.log([...target]);
            return (
                target.map((item, index) => {
                    //console.log({...{["item"+index]:item}})
                    return (
                        <div key={index}
                            className={"stringData"}>
                            <TextFieldsSelectExercisesNative 
                                                    //onReadField={(event) => ReadNewExerciseName(event, index)}
                                                    value = {item.exercisesName}
                                                    placeholder={"Exercise Name"}
                                                    data = {currentExercises}
                            /> 
                            {/* <SimpleSelect
                                            value = {item.exercisesName}
                                            placeholder={"Exercise Name"}
                                            data = {currentExercises}
                            /> */}
                            <TextFieldsStandartNumber     
                                                    //onReadField={(event) => ReadRepeatsField(event, index)}
                                                    value = {item.repeats}
                                                    placeholder={"Repeats"}
                            /> 
                            <TextFieldsStandartNumber     
                                                    //onReadField={(event) => ReadMeasurementField(event, index)}
                                                    value = {item.measurements}
                                                    placeholder={"Measurement"}
                            />
                            <div className={"measurementType"}>
                                {item.measurementType}
                            </div>
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
                                //HandleSignInButton={addNewStringWorkout}
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
        currentExercises: state.currentEditExercisesRequest,
        currentWorkoutWithDate: state.currentWorkoutWithDate
    }),

    dispatch => ({
        onAddNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_WORKOUT', payload})
        }
    })
)(EditWorkautComponent);