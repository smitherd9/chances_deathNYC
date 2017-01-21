
// Searching by Ethnicity 

const SELECTED_ETHNICITY = 'SELECTED_ETHNICITY';
const selectedEthnicity = (selected) => {
	return {
		type: SELECTED_ETHNICITY,
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

const SHOW_ABOUT_MODAL = 'SHOW_ABOUT_MODAL';
const showAboutModal = () => {
    return {
        type: SHOW_ABOUT_MODAL
        
    }
}

const CLOSE_ABOUT_MODAL = 'CLOSE_ABOUT_MODAL';
const closeAboutModal = () => {
    return {
        type: CLOSE_ABOUT_MODAL
        
    }
}


// Action Creators 

const byEthnicity = function(ethnicity) {
    return function(dispatch) {
        var url = new Request('https://calm-sands-83203.herokuapp.com/ethnicity/' + ethnicity, 

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
        var url = new Request('https://calm-sands-83203.herokuapp.com/sex/' + sex, 
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
        var url = new Request('https://calm-sands-83203.herokuapp.com/year/' + year, 
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


exports.SELECTED_ETHNICITY = SELECTED_ETHNICITY;
exports.selectedEthnicity = selectedEthnicity;
exports.ETHNICITY = ETHNICITY;
exports.byEthnicitySuccess = byEthnicitySuccess;
exports.ETHNICITY_ERR = ETHNICITY_ERR;
exports.byEthnicityError = byEthnicityError;
exports.byEthnicity = byEthnicity;


exports.SELECTED_SEX = SELECTED_SEX;
exports.selectedSex = selectedSex;
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

exports.SHOW_ABOUT_MODAL = SHOW_ABOUT_MODAL;
exports.showAboutModal = showAboutModal;

exports.CLOSE_ABOUT_MODAL = CLOSE_ABOUT_MODAL;
exports.closeAboutModal = closeAboutModal;