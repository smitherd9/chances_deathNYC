
const SELECTED_STATE = 'SELECTED_STATE';
const selectedState = (selected) => {
	return {
		type: SELECTED_STATE,
		selectedState: selected
	}
}


const ETHNICITY = 'ETHNICITY';
const byEthnicitySuccess = (ethnicity) => {
	return {
		type: ETHNICITY,
		ethnicity: ethnicity
	}
}

const ETHNICITY_ERR = 'ETHNICITY_ERR';
const byEthnicityError = (ethnicity, err) => {
	return {
		type: ETHNICITY,
		ethnicity: ethnicity
	}
}


const SEX = 'SEX';
const bySexSuccess = (sex) => {
	return {
		type: SEX,
		sex: sex
	}
}

const SEX_ERR = 'SEX_ERR';
const bySexError = (sex, err) => {
	return {
		type: SEX_ERR,
		sex: sex
	}
}



const byEthnicity = function(ethnicity) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/ethnicity', 
        	{method: 'GET', 
        	// body: JSON.stringify({
        	// 	ethnicity: ethnicity
        	// }), 
        	headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			}
   		});
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {            
            return dispatch(
                byEthnicitySuccess(ethnicity)
            );
        })
        .catch(function(err) {
            return dispatch(
                byEthnicityError(ethnicity, err)
            );
        });
    }
};


const bySex = function(sex) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/sex', 
        	{method: 'GET', 
        	headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			}
   		});
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {            
            return dispatch(
                bySexSuccess(sex)
            );
        })
        .catch(function(err) {
            return dispatch(
                bySexError(sex, err)
            );
        });
    }
};



exports.ETHNICITY = ETHNICITY;
exports.byEthnicitySuccess = byEthnicitySuccess;
exports.ETHNICITY_ERR = ETHNICITY_ERR;
exports.byEthnicityError = byEthnicityError;
exports.byEthnicity = byEthnicity;

exports.SEX = SEX;
exports.bySexSuccess = bySexSuccess;
exports.SEX_ERR = SEX_ERR;
exports.bySexError = bySexError;
exports.bySex = bySex;

exports.SELECTED_STATE = SELECTED_STATE;
exports.selectedState = selectedState;