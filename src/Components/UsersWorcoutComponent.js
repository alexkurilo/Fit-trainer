import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import ButtonTurquoise from "./ButtonTurquoise";
import DashboardComponent from "./DashboardComponent";
import NewExerciseComponent from "./NewExerciseComponent";
import EditExerciseComponent from "./EditExerciseComponent";
import NewWorkoutComponent from "./NewWorkoutComponent";
import EditWorkoutComponent from "./EditWorkoutComponent";

const UsersWorcoutComponent = () => {
    
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
                <Link   to="/user/dashboard"
                        className={"link"}>
                    <ButtonTurquoise    label = {"Dashboard"}
                                        imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/user/new exercise"
                        className={"link"}>
                    <ButtonTurquoise    label = {"New exercise"}
                                        imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/user/edit exercise"
                        className={"link"}>
                    <ButtonTurquoise    label = {"Edit exercises"}
                                        imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                                        ClassName = {"illumination"}
                    />
                </Link>
                <div className={"illumination"}
                >
                    {/* <ButtonTurquoise    label = {"New workout"}
                                        imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                                        
                    /> */}
                    <div className={"myButton"}>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>New workout
                    </div>
                </div>
                <div //className={"illumination"}
                >
                    <ButtonTurquoise    label = {"Edit worcout"}
                                        imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </div>
            </div>
            <div className={"Component"}>
                <Switch>
                    <Route path="/user/dashboard" component = {DashboardComponent} />
                    <Route path="/user/new exercise" component = {NewExerciseComponent} />
                    <Route path="/user/edit exercise" component = {EditExerciseComponent} />
                    <Route path="/user/new_date/new workout" component = {NewWorkoutComponent} />
                    <Route path="/user/date/edit workout" component = {EditWorkoutComponent} />
                    <Redirect from = "/user" to="/user/dashboard"/>
                </Switch>
            </div>
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(UsersWorcoutComponent);