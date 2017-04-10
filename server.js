const express =  require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


var Data = {    
    returnData: []
};


app.get('/sex/:sex', function(req, res) {
    req.query.sex = req.params.sex;    
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(finalChancesScore());        

        });
});


app.get('/ethnicity/:ethnicity', function(req, res) {
    req.query.race_ethnicity = req.params.ethnicity;   
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(finalChancesScore());
        

        });

});


app.get('/year/:year', function(req, res) {
    req.query.year = req.params.year;    
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(finalChancesScore());
        console.log(response.body);
        

        });

});


app.get('/ethandsex/:ethnicity/:sex', function(req, res) {
    req.query.race_ethnicity = req.params.ethnicity;
    req.query.sex = req.params.sex;
    // create new obj declaration for 67 - 70 and pass that to query
    // console.log first       
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)        

        .end(function(response) {
        storeInData(response.body);
        // is 78 running but not completing?
        // try to rewrite storeInData and finalchancesscore, has explicit arg that depends on storeinData or res.body
        //can console.log finalChancesScore        
        res.json(finalChancesScore());
        console.log(response.body);
        

        });

});


app.get('/ethandyear/:ethnicity/:year', function(req, res) {
    req.query.race_ethnicity = req.params.ethnicity;
    req.query.year = req.params.year;     
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(finalChancesScore());
        

        });

});


app.get('/sexandyear/:sex/:year', function(req, res) {
    req.query.sex = req.params.sex; 
    req.query.year = req.params.year;     
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(finalChancesScore());
        

        });

});


app.get('/ethsexandyear/:ethnicity/:sex/:year', function(req, res) {
    req.query.race_ethnicity = req.params.ethnicity;
    req.query.sex = req.params.sex; 
    req.query.year = req.params.year;     
    req.query.$$app_token = 'bOdo0GBO11GSiRssvuQLv0t3A';

        unirest.get('https://data.cityofnewyork.us/resource/uvxr-2jwn.json?')
        .query(req.query)

        .end(function(response) {
        storeInData(response.body);        
        res.json(finalChancesScore());
        

        });

});



const storeInData = function(response) {
    console.log(response.length);
    Data.returnData = [];
    for (let i = 0; i < response.length; i++) {
        let data = response[i];
        
        if (data.hasOwnProperty('age_adjusted_death_rate') && (data.hasOwnProperty('race_ethnicity')) && (data.hasOwnProperty('death_rate')) && (data.hasOwnProperty('deaths')) && (data.hasOwnProperty('sex')) && (data.hasOwnProperty('year')) && (data.hasOwnProperty('leading_cause'))) {
            Data.returnData.push({
                'race_ethnicity': data.race_ethnicity,
                'ageAdjusted': data.age_adjusted_death_rate,
                'deathRate': data.death_rate,
                'leadingCause': data.leading_cause,
                'deathNum': data.deaths,
                'sex': data.sex,
                'year': data.year
            });
        }

    }



   

};


const finalChancesScore = function() {

    Data.returnData.sort(function(a, b){
        if (+a.ageAdjusted > +b.ageAdjusted) {
            return -1;
        }

        if (+a.ageAdjusted < +b.ageAdjusted){
            return 1;
        }

        return 0;
    });

    return Data.returnData;

}


app.listen(process.env.PORT || 8000);