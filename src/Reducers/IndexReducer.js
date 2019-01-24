import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import currntUserSignInData from "./EntryInRequestReducer";
import currentNewExerciseRequest from "./NewExerciseRequestReducer";
import currentEditExercisesRequest from "./EditExercisesReducer";
import currentNewWorkoutRequest from "./NewWorkoutReducer";
import currentWorkoutWithDate from "./EditWorkoutReducer";
import selectedDays from "./SelectedDaysReducer";
import selectDate from "./SelectDateReducer";

export default combineReducers ({
    routing: routerReducer,
    currntUserSignInData,
    currentNewExerciseRequest,
    currentEditExercisesRequest,
    currentNewWorkoutRequest,
    currentWorkoutWithDate,
    selectedDays,
    selectDate
})