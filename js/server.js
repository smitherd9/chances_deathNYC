const express =  require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


var Data = {
    chancesRating: 0,
    returnData: []
};


app.get('/sex/:sex', function(req, res) {
    req.query.sex = req.params.sex;
    req.query.$limit = 15;
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(Data.returnData);        

        });
});


app.get('/ethnicity/:ethnicity', function(req, res) {
    req.query.race_ethnicity = req.params.ethnicity;
    req.query.$limit = 15;
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(Data.returnData);
        

        });

});



const storeInData = function(response) {
    console.log(response.length);
    for (let i = 0; i < response.length; i++) {
        let data = response[i];
        
        if (data.hasOwnProperty('age_adjusted_death_rate') && (data.hasOwnProperty('death_rate')) && (data.hasOwnProperty('deaths')) && (data.hasOwnProperty('year')) && (data.hasOwnProperty('leading_cause'))) {
            Data.returnData.push({
                'ageAdjusted': data.age_adjusted_death_rate,
                'deathRate': data.death_rate,
                'leadingCause': data.leading_cause,
                'deathNum': data.deaths,
                'year': data.year
            });
        }

    }

    finalChancesScore();

   

};


const finalChancesScore = function() {
	// give score from 1 - 10
	// 
}





app.listen(process.env.PORT || 8000);