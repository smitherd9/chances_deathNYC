import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
	response: [],
	selectedEthnicity: "",
	selectedSex: ""
	// sex: [],
	// deathRate: [],
	// leadingCause: [],
	// ageAdjusted: [],
	// deathNum: []
}







const DeathReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.ETHNICITY) {

    	return Object.assign({}, state, {
            response: action.response
            


        });
    }

        if (action.type === actions.SELECTED_STATE) {

    	return Object.assign({}, state, {            
            selectedEthnicity: action.selectedEthnicity,
            selectedSex: action.selectedSex

        });
    }

        if (action.type === actions.SELECTED_SEX) {

        return Object.assign({}, state, {       
            
            selectedSex: action.selectedSex

        });
    }


    if (action.type === actions.SEX) {

        return Object.assign({}, state, {            
            ethnicity: action.ethnicity,
            sex: action.sex,
            deathRate: action.deathRate,
            leadingCause: action.leadingCause,
            ageAdjusted: action.ageAdjusted,
            deathNum: action.deathNum

        });

    }



 return state;

};


 export default DeathReducer;