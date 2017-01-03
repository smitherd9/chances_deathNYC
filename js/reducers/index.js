import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
	response: [],
	selectedEthnicity: "",
	selectedSex: "",
    selectedYear: ""  
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

 return state;

};


 export default DeathReducer;