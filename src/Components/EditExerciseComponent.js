import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";

const EditExerciseComponent = ({onEditExercisesRequestTop, onEditExercisesRequestBottom, onEditExercisesRequestDelete,
    currentEditExercisesRequest}) => {
    const HandleCreateExerciseButton = () => {
        console.log(currentEditExercisesRequest);
    };

    const onClickTop = (event, index) => {
        onEditExercisesRequestTop(index);
    };

    const onClickBottom = (event, index) => {
        onEditExercisesRequestBottom(index);
    };

    const onClickDelete = (event, index) => {
        onEditExercisesRequestDelete(index);
        console.log("click");
    };

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
                        currentEditExercisesRequest.map((item, index) => 
                            <div    key={index} 
                                    className={"stringData"}>
                                <TextFieldsStandart     value = {item.exercisesName}
                                                        placeholder={"Exercise Name"}
                                /> 
                                <TextFieldsSelectNative value = {item.measurementType}
                                                        placeholder = {"Measurement Type"}
                                />
                                <ButtonTurquoise    onClick = {(event) => onClickTop(event, index)}
                                                    imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/up.png"}
                                />
                                
                                <ButtonTurquoise    onClick = {(event) => onClickBottom(event, index)}
                                                    imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/down.png"}
                                />
                                <ButtonYellow   onClick={(event) => onClickDelete(event, index)}
                                                imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/delete-sign.png"}
                                />
                            </div>
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