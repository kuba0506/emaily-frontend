import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import surveysReducer from './surveys.reducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: reduxFormReducer,
    surveys: surveysReducer
});