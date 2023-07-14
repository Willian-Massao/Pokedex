const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
app.set(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const port = 3000;

app.get('/', async (req, res) => {
    try{
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1300&offset=0');

        res.render('home', {data: response.data});
        //console.log(response.data);
    }catch(err){
        console.log(err);
    }
});

app.get('/pokemon/:name', async (req, res) => {
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);

        res.render('pokemon', {data: response.data});
        //console.log(response.data);
    }catch(err){
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 