import React, { Component } from 'react';
import {connect} from 'react-redux';

//import { render } from 'react-dom';
import InfiniteCalendar, {
    Calendar,
    defaultMultipleDateInterpolation,
    withMultipleDates
  }  from 'react-infinite-calendar';
import "react-infinite-calendar/styles.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import ButtonTurquoise from './ButtonTurquoise';
import { Link } from 'react-router-dom';

class DashboardComponent extends Component  {
    constructor(props) {
        super(props);
        this.selectDay = this.selectDay.bind(this);
    }

    componentWillMount ( ) {
        console.log("render");
        this.props.currentWorkoutWithDate.forEach((element) =>  {
            this.props.onAddSelectedDate(element.date);
        });
    }

    selectDay = (event) => {
        console.log(event);
        this.props.onSelectDate(event.getFullYear().toString()+(event.getMonth()+1 <= 9 ? "0"+(event.getMonth()+1).toString() : event.getMonth()+1).toString()+(event.getDate() <= 9 ? "0"+event.getDate().toString() : event.getDate().toString()));
    };
    
    render(){
        return(
            <div className={'myDashboardPage'}>
                <Link   to="/new exercise"
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
        );
    }
};


export default connect(
    (state) => ({
        selectedDays: state.selectedDays,
        selectDate: state.selectDate,
        currentWorkoutWithDate: state.currentWorkoutWithDate
    }),

    dispatch => ({
        onAddSelectedDate: (data) => {
            const payload = data;
            dispatch ({type: 'ADD_SELECTED_DATE', payload})
        },
        onSelectDate: (data) => {
            const payload = data;
            dispatch ({type: 'SELECT_DATE', payload})
        },
    })
)(DashboardComponent);