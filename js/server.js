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
    // req.query.$limit = 50;
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
    // req.query.$limit = 50;
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
    // req.query.$limit = 50;
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

    // return Data.returnData.slice(0, 4);


    // return Data.returnData.reduce(function(accumulator, current, index){
    //     if (+current.ageAdjusted > +accumulator.ageAdjusted){
    //         return current;
    //     }
    //     else {
    //         return accumulator;
    //     }

        
    // });
}

// 	for (let i = 0; i < Data.returnData.length; i++) {

//         let ageAdjusted = Data.returnData[i].ageAdjusted;
//         let largestAgeAdjusted = parseInt(Math.max.apply(Math, ageAdjusted), 10);

//         if (ageAdjusted == largestAgeAdjusted) {
//             return Data.returnData[i].leadingCause;   //will just return all leadingCause?
//         }

//         if ((ageAdjusted > 10) && (ageAdjusted < 30)) {
//             Data.chancesRating = Data.chancesRating + 1;
//         }

//         else if ((ageAdjusted > 30) && (ageAdjusted < 50)) {
//             Data.chancesRating = Data.chancesRating + 2;
//         }

//         else if ((ageAdjusted > 50) && (ageAdjusted < 70)) {
//             Data.chancesRating = Data.chancesRating + 3;
//         }

//         else if ((ageAdjusted > 70) && (ageAdjusted < 90)) {
//             Data.chancesRating = Data.chancesRating + 4;
//         }

//         else if ((ageAdjusted > 90) && (ageAdjusted < 110)) {
//             Data.chancesRating = Data.chancesRating + 6;
//         }

//         else if ((ageAdjusted > 110) && (ageAdjusted < 150)) {
//             Data.chancesRating = Data.chancesRating + 7;
//         }

//         else if ((ageAdjusted > 150) && (ageAdjusted < 180)) {
//             Data.chancesRating = Data.chancesRating + 8;
//         }

//         else if ((ageAdjusted > 180) && (ageAdjusted < 210)) {
//             Data.chancesRating = Data.chancesRating + 9;
//         }

//         else {
//             Data.chancesRating = Data.chancesRating + 10;
//         }
//     }
// }





app.listen(process.env.PORT || 8000);