import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import currntUserSignInData from "./EntryInRequestReducer";
import currentNewExerciseRequest from "./NewExerciseRequestReducer";
import currentEditExercisesRequest from "./EditExercisesReduser";
import currentNewWorkoutRequest from "./NewWorkoutReducer";
import currentWorkoutWithDate from "./EditWorkoutReducer";

export default combineReducers ({
    routing: routerReducer,
    currntUserSignInData,
    currentNewExerciseRequest,
    currentEditExercisesRequest,
    currentNewWorkoutRequest,
    currentWorkoutWithDate
})