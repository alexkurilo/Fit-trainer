import React, { Component } from 'react';
import {connect} from 'react-redux';

import InfiniteCalendar, {Calendar, defaultMultipleDateInterpolation, withMultipleDates}  from 'react-infinite-calendar';
import "react-infinite-calendar/styles.css";
import { Link, withRouter } from "react-router-dom";
import ButtonTurquoise from './ButtonTurquoise';

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import currentWorkoutWithDate from "../Reducers/EditWorkoutReducer";

class DashboardComponent extends Component  {
    componentWillMount ( ) {
        if (this.props.currentNamePage !== this.namePage) this.props.onChangeNamePage(this.namePage);
        /*if (this.props.selectDate === ""){
            this.props.currentWorkoutWithDate.forEach((element) =>  {
                this.props.onAddSelectedDates(element.date);
            });
        }*/
    }

    namePage = "Dashboard";

    selectDay = (event) => {
        console.log(event);
        let selectedDate = event.getFullYear().toString()+(event.getMonth()+1 <= 9 ? "0"+(event.getMonth()+1).toString() : event.getMonth()+1).toString()+(event.getDate() <= 9 ? "0"+event.getDate().toString() : event.getDate().toString());
        let arr = this.props.selectedDays;
        let marker = true;
        this.props.onSelectDate(selectedDate);
        console.log(this.props.selectDate);
        console.log(selectedDate);
        arr.forEach((item) => {
            if (item === selectedDate){
                marker = false;
            }
        });
        if (marker){
            this.props.history.push("/user/"+this.props.currentUserSignInData.email+"/"+selectedDate+"/new workout");
            this.props.onAddSelectedDate(selectedDate);
        }else{
            this.props.history.push("/user/"+this.props.currentUserSignInData.email+"/"+selectedDate+"/edit workout/");
        }
    };
    
    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}
                                    username = {this.props.currentUserSignInData.email}
                />
                    <div className={'myDashboardPage'}>
                        <Link   to={"/user/"+this.props.currentUserSignInData.email+"/new exercise"}
                                className={"link"}>
                            <ButtonTurquoise  label={"ADD NEW EXERCISE"}
                            />
                        </Link>
                        <InfiniteCalendar
                            width={400}
                            height={600}
                            minDate={new Date()}
                            Component={withMultipleDates(Calendar)}
                            interpolateSelection={defaultMultipleDateInterpolation}
                            onSelect={(event) => this.selectDay(event)}
                            selected={this.props.selectedDays}
                        />,
                    </div>
                <FooterComponent/>
            </div>
            
        );
    }
};


export default withRouter(connect(
    (state) => ({
        selectedDays: state.selectedDays,
        selectDate: state.selectDate,
        currentWorkoutWithDate: state.currentWorkoutWithDate,
        currentNamePage: state.currentNamePage,
        currentUserSignInData: state.currentUserSignInData
    }),

    dispatch => ({
        /*onAddSelectedDates: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_SELECTED_DATES', payload})
        },*/
        onAddSelectedDate: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_SELECTED_DATE', payload})
        },
        onSelectDate: (data) => {
            const payload = data;
            dispatch ({type: 'SELECT_DATE', payload})
        },
        onChangeNamePage:(data) => {
            const payload = data;
            dispatch({type: 'CHANGE_NAME_PAGE', payload})
        },
        /*onNewExerciseRequest: (data) => {
            const payload = data;
            dispatch ({type: 'NEW_EXERCISE_REQUEST', payload})
        },*/
    })
)(DashboardComponent));