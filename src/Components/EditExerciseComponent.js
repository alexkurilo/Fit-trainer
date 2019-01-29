import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import TextFieldsStandart from './TextFieldsStandart';
import TextFieldsSelectNative from './TextFieldsSelectNative';
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import firebase from 'firebase';
import {config} from '../Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class EditExerciseComponent extends Component{
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
    };

    namePage = "Edit EXercises";

    HandleCreateExerciseButton = () => {
        console.log(this.props.currentEditExercisesRequest);
        this.props.history.push("/user/"+(this.props.currentUserSignInData.email)+"/dashboard");

        firebase.database().ref("/").child(this.props.currentUserSignInData.id).child("exercises").set (this.props.currentEditExercisesRequest);
    };

    ReadEditExerciseName = (value, index) => {
        this.props.onChangeEditExerciseName([value, index]);
    };
    
    ReadEditMeasurementType = (value, index) => {
        this.props.onChangeEditMeasurementType([value, index]);
    };

    ClickButton = (data) => {
        this.props.onClickButton([...data]);
    };


    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}/>
                <div className={"signWindow"}>
                    <div className={"signHeader"}>
                        <h3>{this.namePage}</h3>
                    </div>
                    <div className={"signBody"}>
                        <div className={'blockStrings'}>
                            {
                                this.props.currentEditExercisesRequest.map((item, index) => {
                                    //console.log({...{["item"+index]:item}})
                                    return (
                                        <div key={index}
                                                className={"stringData"}>
                                            <TextFieldsStandart     onreadfield={(event) => this.ReadEditExerciseName(event, index)}
                                                                    value = {item.exercisesName}
                                                                    placeholder={"Exercise Name"}
                                            />
                                            <TextFieldsSelectNative onreadfield={(event) => this.ReadEditMeasurementType(event, index)}
                                                                    value = {item.measurementType}
                                                                    placeholder = {"Measurement Type"}
                                            />
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
                            }
                        </div>
                        <PinkButton  handlesigninbutton={this.HandleCreateExerciseButton}
                                     label={"EDIT EXERCISES"}
                        />
                    </div>

                </div>
                <FooterComponent/>
            </div>
        );
    }
}


export default withRouter(connect(
    (state) => ({
        currentEditExercisesRequest: state.currentEditExercisesRequest,
        currentNamePage: state.currentNamePage,
        currentUserSignInData: state.currentUserSignInData
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
        onClickButton: (data) => {
            const payload = data;
            dispatch ({type: 'CLICK_BUTTON_EDIT_EXERCISES', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(EditExerciseComponent));