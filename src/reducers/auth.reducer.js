import {FETCH_USER} from '../actions/types';

export default function (state = null, action) {
    // null  - request in progress
    // value user logged in
    // false if logout
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; // if user is loggout the value is ''
        default:
            return state;
    }
}