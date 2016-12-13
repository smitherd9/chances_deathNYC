const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());




app.get('/fewest-guesses', function(req, res) {
    res.json( {fewestGuesses: storage.fewestGuesses} );
});


app.post('/fewest-guesses', function(req, res) {
	let guess = parseInt(req.body.guesses, 10);
	storage.add(guess);
	
	res.json( {fewestGuesses: storage.fewestGuesses} );
    
});



app.listen(process.env.PORT || 8080);