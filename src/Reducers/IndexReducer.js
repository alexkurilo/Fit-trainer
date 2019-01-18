import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import currntUserSignInData from "./EntryInRequestReducer";
import currntUserSignUpData from "./EntryUpRequestReducer";

export default combineReducers ({
    routing: routerReducer,
    currntUserSignInData,
    currntUserSignUpData
})