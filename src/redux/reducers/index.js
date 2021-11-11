import { combineReducers } from 'redux';
import principalReducer from './principalReducer';
import interestReducer from './interestReducer';
import yearsReducer from './yearsReducer';

const reducers = combineReducers({
    principal: principalReducer,
    interest: interestReducer,
    years: yearsReducer,
});

export default reducers;
