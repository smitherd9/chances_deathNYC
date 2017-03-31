import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
	response: [],
	selectedEthnicity: "Ethnicity",
	selectedSex: "Sex",
    selectedYear: "Year",
    showAboutModal: false  
}







const DeathReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.SELECTED_ETHNICITY) {

        return Object.assign({}, state, {            
            selectedEthnicity: action.selectedEthnicity
           

        });
    }


    if (action.type === actions.ETHNICITY) {

    	return Object.assign({}, state, {
            response: action.response
            


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

    if (action.type === actions.SHOW_ABOUT_MODAL) {

        return Object.assign({}, state, {       
            
            showAboutModal: true

        });
    }


    if (action.type === actions.CLOSE_ABOUT_MODAL) {

        return Object.assign({}, state, {       
            
            showAboutModal: false

        });
    }

 return state;

};


 export default DeathReducer;