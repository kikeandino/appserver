var express = require('express');
var app = express();
const hbs = require('hbs');


const port = process.env.PORT || 3000;




app.use(express.static(__dirname + '/public'));
//expres hb engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => { return new Date().getFullYear(); });





app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Omar Andino'

    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port);