import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';

import ButtonTurquoise from "./ButtonTurquoise";
import DashboardComponent from "./DashboardComponent";
import NewExerciseComponent from "./NewExerciseComponent";
import EditExerciseComponent from "./EditExerciseComponent";
import NewWorkoutComponent from "./NewWorkoutComponent";
import EditWorkoutComponent from "./EditWorkoutComponent";

const NamePageArray = [
    {
        name: "Dashboard",
        src: "https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"
    },
    {
        name: "New exercise",
        src: "https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"
    },
    {
        name: "Edit exercises",
        src: "https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"
    },
    {
        name: "New workout",
        src: "https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"
    },
    {
        name: "Edit workout",
        src: "https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"
    }];

class UsersWorkoutComponent extends Component {

    componentWillMount ( ) {
        console.log( this.props.history.location.pathname);
        console.log(this.props.selectDate);

    };

    showIllumination = (item) => {
        if (item.name.toLowerCase() === this.props.currentNamePage.toLowerCase())return "illumination";
    };

    onclick = (item) => {
        if(item.name.toLowerCase() === NamePageArray[0].name.toLowerCase())this.props.history.push("/user/dashboard");
        if(item.name.toLowerCase() === NamePageArray[1].name.toLowerCase())this.props.history.push("/user/new exercise");
        if(item.name.toLowerCase() === NamePageArray[2].name.toLowerCase())this.props.history.push("/user/edit exercises");
    };

    render(){
        return(
            <div className={'myPage'}>
                <div className={'SideBar'}>
                    <div className={'Header'}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <div >
                            FIT TRAINER
                        </div>
                    </div>
                    <hr/>
                    {NamePageArray.map((item, index) => {
                        return (
                            <div className={"myButton"+" "+ this.showIllumination(item)}
                                 key = {index}
                                 onClick = {() => this.onclick(item)}
                            >
                                <div>
                                    <img src={item.src}/>{item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={"Component"}>
                    <Switch>
                        <Route path="/user/dashboard" component = {DashboardComponent} />
                        <Route path="/user/new exercise" component = {NewExerciseComponent} />
                        <Route path="/user/edit exercises" component = {EditExerciseComponent} />
                        <Route path="/user/new_date/new workout" component = {NewWorkoutComponent} />
                        <Route path="/user/date/edit workout" component = {EditWorkoutComponent} />
                        <Redirect from = "/user" to="/user/dashboard"/>
                    </Switch>
                </div>
            </div>
        );
    }
};


export default withRouter(connect(
    (state) => ({
        currentNamePage: state.currentNamePage
    }),

    dispatch => ({

    })
)(UsersWorkoutComponent));