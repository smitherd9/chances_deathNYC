import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
	ethnicity: [],
	selectedEthnicity: "",
	selectedSex: "",
	sex: [],
	deathRate: [],
	leadingCause: [],
	ageAdjusted: [],
	deathNum: []
}







const DeathReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.ETHNICITY) {

    	return Object.assign({}, state, {
            ethnicity: action.ethnicity,
            selectedEthnicity: action.selectedEthnicity,
            sex: action.sex,
            deathRate: action.deathRate,
            leadingCause: action.leadingCause,
            ageAdjusted: action.ageAdjusted,
            deathNum: action.deathNum

        });
    }

        if (action.type === actions.SELECTED_STATE) {

    	return Object.assign({}, state, {            
            selectedEthnicity: action.selectedEthnicity,
            selectedSex: action.selectedSex

        });
    }



 return state;

};


 export default DeathReducer;