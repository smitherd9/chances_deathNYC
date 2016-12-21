import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
	response: [],
	selectedEthnicity: "",
	selectedSex: "",
    selectedYear: "",
    introScreen: true,
    resultsScreen: false
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
            selectedEthnicity: action.selectedEthnicity
           

        });
    }

    if (action.type === actions.SELECTED_SEX) {

        return Object.assign({}, state, {       
            
            selectedSex: action.selectedSex

        });
    }


    if (action.type === actions.SEX) {

        return Object.assign({}, state, {            
            response: action.response

        });

    }

    if (action.type === actions.SELECTED_YEAR) {

        return Object.assign({}, state, {       
            
            selectedYear: action.selectedYear

        });
    }

    if (action.type === actions.YEAR) {

        return Object.assign({}, state, {       
            
            response: action.response

        });
    }

    if (action.type === actions.INTRO) {

        return Object.assign({}, state, {       
            
            introScreen: false

        });
    }

    if (action.type === actions.RESULTS) {

        return Object.assign({}, state, {       
            
            resultsScreen: true

        });
    }

    if (action.type === actions.HIDE_RESULTS) {

        return Object.assign({}, state, {       
            
            resultsScreen: false

        });
    }



 return state;

};


 export default DeathReducer;