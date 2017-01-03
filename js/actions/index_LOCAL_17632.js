
// Searching by Ethnicity 

const SELECTED_STATE = 'SELECTED_STATE';
const selectedState = (selected) => {
	return {
		type: SELECTED_STATE,
		selectedEthnicity: selected
	}
}


const ETHNICITY = 'ETHNICITY';
const byEthnicitySuccess = (response) => {
	return {
		type: ETHNICITY,
		response: response
	}
}

const ETHNICITY_ERR = 'ETHNICITY_ERR';
const byEthnicityError = (response, err) => {
	return {
		type: ETHNICITY,
		response: response,
        err: err
	}
}

// Searching by Sex

const SELECTED_SEX = 'SELECTED_SEX';
const selectedSex = (selected) => {
    return {
        type: SELECTED_SEX,
        selectedSex: selected
    }
}


const SEX = 'SEX';
const bySexSuccess = (response) => {
	return {
		type: SEX,
		response: response
	}
}

const SEX_ERR = 'SEX_ERR';
const bySexError = (response, err) => {
	return {
		type: SEX_ERR,
		response: response,
        err: err
	}
}


// Searching by Year


const SELECTED_YEAR = 'SELECTED_YEAR';
const selectedYear = (selected) => {
    return {
        type: SELECTED_YEAR,
        selectedYear: selected
    }
}


const YEAR = 'YEAR';
const byYearSuccess = (response) => {
    return {
        type: YEAR,
        response: response
    }
}

const YEAR_ERR = 'YEAR_ERR';
const byYearError = (response, err) => {
    return {
        type: YEAR_ERR,
        response: response,
        err: err
    }
}


// Action Creators 

const byEthnicity = function(ethnicity) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/ethnicity/' + ethnicity, 
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
                byEthnicitySuccess(data)
            );
        })
        .catch(function(data, err) {
            return dispatch(
                byEthnicityError(data, err)
            );
        });
    }
};


const bySex = function(sex) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/sex/' + sex, 
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
                bySexSuccess(data)
            );
        })
        .catch(function(data, err) {
            return dispatch(
                bySexError(data, err)
            );
        });
    }
};



const byYear = function(year) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/year/' + year, 
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
                byYearSuccess(data)
            );
        })
        .catch(function(data, err) {
            return dispatch(
                byYearError(data, err)
            );
        });
    }
};


exports.SELECTED_STATE = SELECTED_STATE;
exports.selectedState = selectedState;
exports.ETHNICITY = ETHNICITY;
exports.byEthnicitySuccess = byEthnicitySuccess;
exports.ETHNICITY_ERR = ETHNICITY_ERR;
exports.byEthnicityError = byEthnicityError;
exports.byEthnicity = byEthnicity;


exports.SELECTED_SEX = SELECTED_SEX;
exports. selectedSex = selectedSex;
exports.SEX = SEX;
exports.bySexSuccess = bySexSuccess;
exports.SEX_ERR = SEX_ERR;
exports.bySexError = bySexError;
exports.bySex = bySex;

exports.SELECTED_YEAR = SELECTED_YEAR;
exports. selectedYear = selectedYear;
exports.YEAR = YEAR;
exports.byYearSuccess = byYearSuccess;
exports.YEAR_ERR = YEAR_ERR;
exports.byYearError = byYearError;
exports.byYear = byYear;