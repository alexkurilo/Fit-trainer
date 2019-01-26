import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import TextFieldsStandartNumber from './TextFieldsStandartNumber';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";
import NativeSelects from "./NativeSelects";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class EditWorkautComponent extends Component {
    namePage = "Edit workout";
    numberInOrder="";
    target = "";

    componentWillMount ( ) {
        console.log(this.namePage);
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
        this.props.currentWorkoutWithDate.forEach((item, index) => {
            if (item.date === this.props.selectDate) {
                this.numberInOrder=index;
                this.target = this.props.currentWorkoutWithDate[this.numberInOrder].exercises;
            }
        });
    };
    
    HandleUpdateWorkoutButton = () => {
        this.props.onSaveWorkout(this.props.currentWorkoutWithDate);
        this.props.history.push("/user/dashboard");
    };

    addNewStringWorkout = () => {
        this.props.onAddNewStringExercise(this.numberInOrder);
    };

    ReadNewExerciseName = (event, index) => {
        for (let i=0; i < this.props.exercisesList.length; i++){
            if (this.props.exercisesList[i].exercisesName === event.target.value) {
                this.props.onChangeNameAndType([event.target.value, index, this.numberInOrder, this.props.exercisesList[i].measurementType, i]);
            };
        };
    };

    ReadRepeatsField = (value, index) => {
        this.props.onChangeRepeats([value, index, this.numberInOrder]);
    };

    ReadMeasurementField = (value, index) => {
        this.props.onChangeMeasurements([value, index, this.numberInOrder]);
    };

    ClickButton = (data) => {
        this.props.onClickButton([...data, this.numberInOrder]);
    };

    mapComponent = () => {
        if (this.target.length !== 0){
            //console.log([...this.target]);
            return (
                this.target.map((item, index) => {
                    console.log({...{["item"+index]:item.exercisesName}});
                    return (
                        <div key={index}
                            className={"stringData"}>
                            <NativeSelects
                                            onReadField={(event) => this.ReadNewExerciseName(event, index)}
                                            value = {item.exercisesName}
                                            placeholder={"Exercise Name"}
                                            data = {this.props.exercisesList}
                            />
                            <TextFieldsStandartNumber     
                                                    onReadField={(event) => this.ReadRepeatsField(event, index)}
                                                    value = {item.repeats}
                                                    placeholder={"Repeats"}
                            /> 
                            <TextFieldsStandartNumber     
                                                    onReadField={(event) => this.ReadMeasurementField(event, index)}
                                                    value = {item.measurements}
                                                    placeholder={"Measurement"}
                            />
                            <div className={"measurementType"}>
                                {item.measurementType}
                            </div>
                            <ButtonTurquoise    index = {index}
                                                nameButton = {"top"}
                                                onHandleClick = {this.ClickButton}
                                                imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/up.png"}
                            />
                            <ButtonTurquoise    index = {index}
                                                nameButton = {"bottom"}
                                                onHandleClick = {this.ClickButton}
                                                imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/down.png"}
                            />
                            <ButtonYellow   index = {index}
                                            nameButton = {"delete"}
                                            onHandleClick = {this.ClickButton}
                                            imgSrc = {"https://img.icons8.com/ultraviolet/24/000000/delete-sign.png"}
                            />
                        </div>
                    )
                })
                 
            ) 
        }
    };

    visibleButtonCreateWorkout = () => {
        if (this.target.length !== 0){
            return (
                <PinkButton  HandleSignInButton={this.HandleUpdateWorkoutButton}
                            label={"UPDATE WORKOUT"}
                />
            )
        }
    }
    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}/>
                <div className={"signWindow"}>
                    <div className={"signHeader"}>
                        <h3>{this.namePage}</h3>
                    </div>
                    <div className={"signBody"}>
                        <PinkButton
                            HandleSignInButton={this.addNewStringWorkout}
                            label={"ADD EXERCISE"}
                        />
                        <div className={'blockStrings'}>
                            {this.mapComponent()}
                        </div>
                        {this.visibleButtonCreateWorkout()}
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
};


export default withRouter(connect(
    (state) => ({
        exercisesList: state.currentEditExercisesRequest,
        currentWorkoutWithDate: state.currentWorkoutWithDate,
        selectDate: state.selectDate,
        currentNamePage: state.currentNamePage
    }),

    dispatch => ({
        onAddNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_EDIT_WORKOUT', payload})
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
        onClickButton: (data) => {
            const payload = data;
            dispatch ({type: 'CLICK_BUTTON_EDIT_WORKOUT', payload})
        },
        onAddNewStringExercise: (data)=> {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_EXERCISE', payload})
        },
        onSaveWorkout: (data)=> {
            const payload = data;
            dispatch ({type: 'SAVE_WORKOUT', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(EditWorkautComponent));