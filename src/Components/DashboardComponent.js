import React, { Component } from 'react';
import {connect} from 'react-redux';

import InfiniteCalendar, {Calendar, defaultMultipleDateInterpolation, withMultipleDates}  from 'react-infinite-calendar';
import "react-infinite-calendar/styles.css";
import { Link, withRouter } from "react-router-dom";
import ButtonTurquoise from './ButtonTurquoise';

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class DashboardComponent extends Component  {
    constructor(props) {
        super(props);
        this.selectDay = this.selectDay.bind(this);
    }

    namePage = "Dashboard";

    componentWillMount ( ) {
        console.log(this.props.selectDate);
        if (this.props.selectDate === ""){
            this.props.currentWorkoutWithDate.forEach((element) =>  {
                this.props.onAddSelectedDates(element.date);
            });
        }
    }

    selectDay = (event) => {
        let selectedDate = event.getFullYear().toString()+(event.getMonth()+1 <= 9 ? "0"+(event.getMonth()+1).toString() : event.getMonth()+1).toString()+(event.getDate() <= 9 ? "0"+event.getDate().toString() : event.getDate().toString());
        let arr = this.props.selectedDays;
        let marker = true;
        this.props.onSelectDate(selectedDate);
        arr.forEach((item) => {
            if (item === selectedDate){
                marker = false;
            }
        });
        if (marker){
            this.props.history.push("/user/new_date/new workout");
            this.props.onAddSelectedDate(selectedDate);
            //this.props.history.push(`/user/new_data/new workout/${new Date()}`);
        }else{
            this.props.history.push("/user/date/edit workout");
        }
    };
    
    render(){
        return(
            <div className={'inComponent'}>
                <HeaderComponent namePage = {this.namePage}/>
                    <div className={'myDashboardPage'}>
                        <Link   to="/user/new exercise"
                                className={"link"}>
                            <ButtonTurquoise  //HandleSignInButton={HandleApdateWorkoutButton}
                                                label={"ADD NEW EXERCISE"}
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
        currentWorkoutWithDate: state.currentWorkoutWithDate
    }),

    dispatch => ({
        onAddSelectedDates: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_SELECTED_DATES', payload})
        },
        onAddSelectedDate: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_SELECTED_DATE', payload})
        },
        onSelectDate: (data) => {
            const payload = data;
            dispatch ({type: 'SELECT_DATE', payload})
        },
    })
)(DashboardComponent));