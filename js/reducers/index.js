import actions from '../actions/index';
import store from '../store';


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


    else if (action.type === actions.ETHNICITY) {

    	return Object.assign({}, state, {
            response: action.response
            


        });
    }
    

    else if (action.type === actions.SELECTED_SEX) {

        return Object.assign({}, state, {       
            
            selectedSex: action.selectedSex

        });
    }


    else if (action.type === actions.SEX) {

        return Object.assign({}, state, {            
            response: action.response

        });

    }

    else if (action.type === actions.SELECTED_YEAR) {

        return Object.assign({}, state, {       
            
            selectedYear: action.selectedYear

        });
    }

    else if (action.type === actions.YEAR) {

        return Object.assign({}, state, {       
            
            response: action.response

        });
    }

    else if (action.type === actions.ETHANDSEX) {

        return Object.assign({}, state, {       
            
            response: action.response

        });
    }

    else if (action.type === actions.ETHANDYEAR) {

        return Object.assign({}, state, {       
            
            response: action.response

        });
    }

    else if (action.type === actions.SEXANDYEAR) {

        return Object.assign({}, state, {       
            
            response: action.response

        });
    }

    else if (action.type === actions.ETHSEXANDYEAR) {
        console.log('We made it!');
        return Object.assign({}, state, {       
            
            response: action.response
            

        });
    }

    else if (action.type === actions.SHOW_ABOUT_MODAL) {

        return Object.assign({}, state, {       
            
            showAboutModal: true

        });
    }


    else if (action.type === actions.CLOSE_ABOUT_MODAL) {

        return Object.assign({}, state, {       
            
            showAboutModal: false

        });
    }

    else if (action.type === actions.RESET_STATE) {

        return Object.assign({}, state, {       
            
            selectedEthnicity: "Ethnicity",
            selectedSex: "Sex",
            selectedYear: "Year"

        });
    }

 else {
    return state;
 }

};


 export default DeathReducer;