import axios from 'axios';
import * as actions from './types';

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/current_user');
        dispatch({
            type: actions.FETCH_USER,
            payload: res.data
        })
    } catch (e) {
        console.log('Error: ', e);
    }
};

export const handleToken = token => async dispatch => {
    try {
        const res = await axios.post('/api/stripe', token);

        dispatch({
            type: actions.FETCH_USER,
            payload: res.data
        });
    } catch (e) {
        console.log('Error: ', e);
    }
};