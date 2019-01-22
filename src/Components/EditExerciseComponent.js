import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";

const EditExerciseComponent = ({props, onEditExercisesRequestTop, onEditExercisesRequestBottom, onEditExercisesRequestDelete,
    onChangeEditExerciseName, onChangeEditMeasurementType, currentEditExercisesRequest }) => {
        
    const HandleCreateExerciseButton = () => {
        console.log(currentEditExercisesRequest);
        
    };

    const ReadEditExerciseName = (value, index) => {
        let data =[value, index];
        onChangeEditExerciseName(data);
    };
    
    const ReadEditMeasurementType = (value, index) => {
        let data =[value, index];
        onChangeEditMeasurementType(data);
    };

    const onClickTop = (index) => {
        onEditExercisesRequestTop(index);
        console.log(currentEditExercisesRequest);
    };

    const onClickBottom = (index) => {
        onEditExercisesRequestBottom(index);
        console.log(currentEditExercisesRequest);
    };

    const onClickDelete = (index) => {
        onEditExercisesRequestDelete(index);
        //console.log(index);
    };
 console.log({...{currentEditExercisesRequest}});
    return(
        <div className={'inComponent'}>
            <div className={'firstLine'}>
                <div>
                    Edit exercises
                </div>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            </div>
            <div className={"signWindow"}>
                <div className={"signHeader"}>
                    <h3>Edit exercises</h3>
                </div>
                <div className={"signBody"}>
                    {
                        currentEditExercisesRequest.map((item, index) => {
                            console.log({...{["item"+index]:item}})
                            return <div key={index}
                                    className={"stringData"}>
                                <TextFieldsStandart     onReadField={(event) => ReadEditExerciseName(event, index)}
                                                        value = {item.exercisesName}
                                                        placeholder={"Exercise Name"}
                                /> 
                                <TextFieldsSelectNative onReadField={(event) => ReadEditMeasurementType(event, index)}
                                                        value = {item.measurementType}
                                                        placeholder = {"Measurement Type"}
                                />
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
                            </div>}
                        )
                    }
                    <PinkButton  HandleSignInButton={HandleCreateExerciseButton}
                                label={"EDIT EXERCISES"}
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
        currentEditExercisesRequest: state.currentEditExercisesRequest
    }),

    dispatch => ({
        onChangeEditExerciseName: (data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_EDIT_EXERCISE_NAME', payload})
        },
        onChangeEditMeasurementType: (data) => {
            const payload = data;
            dispatch ({type: 'CHANGE_EDIT_MEASUREMENT_TYPE', payload})
        },
        onEditExercisesRequestTop: (data) => {
            const payload = data;
            dispatch ({type: 'EDIT_EXERCISES_REQUEST_TOP', payload})
        },
        onEditExercisesRequestBottom: (data) => {
            const payload = data;
            dispatch ({type: 'EDIT_EXERCISES_REQUEST_BOTTOM', payload})
        },
        onEditExercisesRequestDelete: (data) => {
            const payload = data;
            dispatch ({type: 'EDIT_EXERCISES_REQUEST_DELETE', payload})
        },
    })
)(EditExerciseComponent);