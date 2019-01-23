import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandartNumber from './TextFieldsStandartNumber';
import TextFieldsSelectExercisesNative from './TextFieldSelectExercisesNative';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";

const EditWorkautComponent = ({currentEditExercisesRequest, currentNewWorkoutRequest, onAddNewStringWorkout, onFillNewStringWorkout, onFillQuantityRepeats, onFillQuantityMeasurements, onNewWorkoutRequestTop, onNewWorkoutRequestBottom, onNewWorkoutRequestDelete }) => {
    let namePage = "Edit workout";
    
    const HandleCreateWorkoutButton = () => {
        console.log(currentNewWorkoutRequest);
        
    };

    const ReadNewExerciseName = (value, index) => {
        for (let i=0; i < currentEditExercisesRequest.length; i++){
            if (currentEditExercisesRequest[i].exercisesName === value) onFillNewStringWorkout([value, i, index, currentEditExercisesRequest[i].measurementType]);
        }
    };

    const ReadRepeatsField = (value, index) => {
        //console.log([value, index]);
        onFillQuantityRepeats([value, index]);
    };

    const ReadMeasurementField = (value, index) => {
        //console.log([value, index]);
        onFillQuantityMeasurements([value, index]);
    };

    const showMeasurementType = (target) => {
        if (Object.keys(target).length > 1 ) {
            return <div className={"measurementType"}>{currentEditExercisesRequest[target.number].measurementType}</div>
        }else{
            return <div className={"measurementType"}>{"undefined"}</div>
        };
    };

    const addNewStringWorkout = () => {
        onAddNewStringWorkout(currentNewWorkoutRequest);
    };

    const onClickTop = (index) => {
        onNewWorkoutRequestTop(index);
    };

    const onClickBottom = (index) => {
        onNewWorkoutRequestBottom(index);
    };

    const onClickDelete = (index) => {
        onNewWorkoutRequestDelete(index);
    };

    const mapComponent = () => {
        if (currentNewWorkoutRequest.length !== 0){
            return (
                currentNewWorkoutRequest.map((item, index) => {
                    //console.log({...{["item"+index]:item}})
                    return (
                        <div key={index}
                                    className={"stringData"}>
                            <TextFieldsSelectExercisesNative 
                                                    onReadField={(event) => ReadNewExerciseName(event, index)}
                                                    value = {item.exercisesName}
                                                    placeholder={"Exercise Name"}
                                                    data = {currentEditExercisesRequest}
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
                            {
                                showMeasurementType(item.length > 1 ? currentEditExercisesRequest[item.number].measurementType : item)
                            }
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
        if (currentNewWorkoutRequest.length !== 0){
            return (
                <PinkButton  HandleSignInButton={HandleCreateWorkoutButton}
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
        currentNewWorkoutRequest: state.currentNewWorkoutRequest,
        currentWorkoutWithData: state.currentWorkoutWithData
    }),

    dispatch => ({
        onAddNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_WORKOUT', payload})
        },
        onFillNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'FILL_NEW_STRING_WORKOUT', payload})
        },
        onFillQuantityRepeats: (data) => {
            const payload = data;
            dispatch ({type: 'FILL_QUANTITY_REPEATS', payload})
        },
        onFillQuantityMeasurements: (data) => {
            const payload = data;
            dispatch ({type: 'FILL_QUANTITY_MEASUREMENTS', payload})
        },
        onNewWorkoutRequestTop:(data) => {
            const payload = data;
            dispatch ({type: 'NEW_WORKOUT_REQUEST_TOP', payload})
        },
        onNewWorkoutRequestBottom:(data) => {
            const payload = data;
            dispatch ({type: 'NEW_WORKOUT_REQUEST_BOTTOM', payload})
        },
        onNewWorkoutRequestDelete:(data) => {
            const payload = data;
            dispatch ({type: 'NEW_WORKOUT_REQUEST_DELETE', payload})
        },
    })
)(EditWorkautComponent);