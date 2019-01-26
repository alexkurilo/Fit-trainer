import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import TextFieldsStandartNumber from './TextFieldsStandartNumber';
import NativeSelects from "./NativeSelects";
import PinkButton from './ButtonPink';
import ButtonTurquoise from "./ButtonTurquoise";
import ButtonYellow from "./ButtonYellow";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class NewWorkoutComponent extends Component{
    componentWillMount ( ) {
        console.log(this.namePage);
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
    };

    namePage = "New workout";

    HandleCreateWorkoutButton = () => {
        this.props.onCreateWorkout([this.props.slectDate, this.props.currentNewWorkoutRequest]);
        this.props.onClearNewWorkout();
        this.props.history.push("/user/dashboard");
    };

    ReadNewExerciseName = (event, index) => {
        console.log([event.target.value, index])
        for (let i=0; i < this.props.currentEditExercisesRequest.length; i++){
            if (this.props.currentEditExercisesRequest[i].exercisesName === event.target.value) {
                this.props.onFillNewStringWorkout([event.target.value, i, index, this.props.currentEditExercisesRequest[i].measurementType]);
            }
        }
    };

    ReadRepeatsField = (value, index) => {
        this.props.onFillQuantityRepeats([value, index]);
    };

    ReadMeasurementField = (value, index) => {
        this.props.onFillQuantityMeasurements([value, index]);
    };

    showMeasurementType = (target) => {
        if (Object.keys(target).length > 1 ) {
            return <div className={"measurementType"}>{this.props.currentEditExercisesRequest[target.numberInList].measurementType}</div>
        }else{
            return <div className={"measurementType"}>{"undefined"}</div>
        };
    };

    addNewStringWorkout = () => {
        this.props.onAddNewStringWorkout(this.props.currentNewWorkoutRequest);
    };

    ClickButton = (data) => {
        this.props.onClickButton([...data]);
    };

    mapComponent = () => {
        if (this.props.currentNewWorkoutRequest.length !== 0){
            return (
                this.props.currentNewWorkoutRequest.map((item, index) => {
                    //console.log({...{["item"+index]:item}})
                    return <div key={index}
                            className={"stringData"}>
                        <NativeSelects
                                                onReadField={(event) => this.ReadNewExerciseName(event, index)}
                                                value = {item.exercisesName}
                                                placeholder={"Exercise Name"}
                                                data = {this.props.currentEditExercisesRequest}
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
                        {
                            this.showMeasurementType(item.length > 1 ? this.props.currentEditExercisesRequest[item.numberInList].measurementType : item)
                        }
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
                    }
                )
                 
            ) 
        }
    };

    visibleButtonCreateWorkout = () => {
        if (this.props.currentNewWorkoutRequest.length !== 0){
            return (
                <PinkButton  HandleSignInButton={this.HandleCreateWorkoutButton}
                            label={"CREATE WORKOUT"}
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
                        <PinkButton  HandleSignInButton={this.addNewStringWorkout}
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
        currentEditExercisesRequest: state.currentEditExercisesRequest,
        currentNewWorkoutRequest: state.currentNewWorkoutRequest,
        slectDate: state.selectDate,
        currentNamePage: state.currentNamePage
    }),

    dispatch => ({
        onAddNewStringWorkout: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_NEW_STRING_NEW_WORKOUT', payload})
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
        onClickButton: (data) => {
            const payload = data;
            dispatch ({type: 'CLICK_BUTTON_NEW_WORKOUT', payload})
        },
        onCreateWorkout:(data) => {
            const payload = data;
            dispatch ({type: 'CREATE_NEW_WORKOUT', payload})
        },
        onClearNewWorkout:(data) => {
            const payload = data;
            dispatch ({type: 'CLEAR_NEW_WORKOUT', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        }
    })
)(NewWorkoutComponent));

