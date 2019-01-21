import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                <Link   to="/dashboard"
                        className={"link"}>
                    <ButtonTurquoise label = {"Dashboard"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/new exercise"
                        className={"link"}>
                    <ButtonTurquoise label = {"New exercise"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/edit exercise"
                        className={"link"}>
                    <ButtonTurquoise label = {"Edit exercises"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/new workout"
                        className={"link"}>
                    <ButtonTurquoise label = {"New workout"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
                <Link   to="/edit workout"
                        className={"link"}>
                    <ButtonTurquoise label = {"Edit worcout"}
                                    imgSrc = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}
                    />
                </Link>
            </div>
            <div className={"Component"}>
                <Switch>
                    <Route path="/dashboard" component = {DashboardComponent} />
                    <Route path="/new exercise" component = {NewExerciseComponent} />
                    <Route path="/edit exercise" component = {EditExerciseComponent} />
                    <Route path="/new workout" component = {NewWorkoutComponent} />
                    <Route path="/edit workout" component = {EditWorkoutComponent} />
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