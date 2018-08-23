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

export const submitSurvey = (values, history) => async dispatch => {
    try {
        const res = await axios.post('/api/surveys', values);
        
        history.push('/surveys'); 
        dispatch({
            type: actions.FETCH_USER,
            payload: res.data
        });
    } catch (e) {
        console.log('Error: ', e);
    }
};

export const fetchSurveys = () => async dispatch => {
    try {
        const res = await axios.get('/api/surveys');
        
        dispatch({
            type: actions.FETCH_SURVEYS,
            payload: res.data
        });
    } catch (e) {
        console.log('Error: ', e);
    }
};

export const removeSurvey = id => async dispatch => {
    console.log('action id', id)
    try {
        const res = await axios.delete(`/api/surveys/remove`, {data: {id}});
        console.log('res ', res)
        
        dispatch({
            type: actions.FETCH_SURVEYS,
            payload: res.data
        });
        
    } catch (e) {
        console.log('Error: ', e);
    }
};
