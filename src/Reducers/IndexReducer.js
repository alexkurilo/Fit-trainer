import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import currntUserSignInData from "./EntryInRequestReducer";
import currentNewExerciseRequest from "./NewExerciseRequestReducer";
import currentEditExercisesRequest from "./EditExercisesReduser";

export default combineReducers ({
    routing: routerReducer,
    currntUserSignInData,
    currentNewExerciseRequest,
    currentEditExercisesRequest
})