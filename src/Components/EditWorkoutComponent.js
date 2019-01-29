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

import firebase from 'firebase';
import {config} from '../Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class EditWorkautComponent extends Component {
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
        this.props.currentWorkoutWithDate.forEach((item, index) => {
            if (item.date === this.props.selectDate) {
                this.numberInOrder=index;
                this.target = this.props.currentWorkoutWithDate[this.numberInOrder].exercises;
            }
        });
    };

    namePage = "Edit workout";
    numberInOrder="";
    target = "";

    HandleUpdateWorkoutButton = () => {
        this.props.onSaveWorkout(this.props.currentWorkoutWithDate);
        this.props.history.push("/user/"+this.props.currentUserSignInData.email+"/dashboard");

        firebase.database().ref("/").child(this.props.currentUserSignInData.id).child("workouts").set (this.props.currentWorkoutWithDate);
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
                    //console.log({...{["item"+index]:item.exercisesName}});
                    return (
                        <div key={index}
                            className={"stringData"}>
                            <NativeSelects
                                            onreadfield={(event) => this.ReadNewExerciseName(event, index)}
                                            value = {item.exercisesName}
                                            placeholder={"Exercise Name"}
                                            data = {this.props.exercisesList}
                            />
                            <TextFieldsStandartNumber
                                                    onreadfield={(event) => this.ReadRepeatsField(event, index)}
                                                    value = {item.repeats}
                                                    placeholder={"Repeats"}
                            /> 
                            <TextFieldsStandartNumber
                                                    onreadfield={(event) => this.ReadMeasurementField(event, index)}
                                                    value = {item.measurements}
                                                    placeholder={"Measurement"}
                            />
                            <div className={"measurementType"}>
                                {item.measurementType}
                            </div>
                            <ButtonTurquoise    index = {index}
                                                namebutton = {"top"}
                                                clickbutton = {this.ClickButton}
                                                imgsrc = {"https://img.icons8.com/ultraviolet/24/000000/up.png"}
                            />
                            <ButtonTurquoise    index = {index}
                                                namebutton = {"bottom"}
                                                clickbutton = {this.ClickButton}
                                                imgsrc = {"https://img.icons8.com/ultraviolet/24/000000/down.png"}
                            />
                            <ButtonYellow   index = {index}
                                            namebutton = {"delete"}
                                            clickbutton = {this.ClickButton}
                                            imgsrc = {"https://img.icons8.com/ultraviolet/24/000000/delete-sign.png"}
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
                <PinkButton  handlesigninbutton={this.HandleUpdateWorkoutButton}
                            label={"UPDATE WORKOUT"}
                />
            )
        }
    };
    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}
                                 username = {this.props.currentUserSignInData.email}
                />
                <div className={"signWindow"}>
                    <div className={"signHeader"}>
                        <h3>{this.namePage}</h3>
                    </div>
                    <div className={"signBody"}>
                        <PinkButton handlesigninbutton={this.addNewStringWorkout}
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
        currentNewWorkoutRequest: state.currentNewWorkoutRequest,
        currentUserSignInData: state.currentUserSignInData,
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