
var express = require('express');
var app = express();
const indianCitiesDatabase = require('indian-cities-database');

app.get('/', function (req, res) {

    var cities = indianCitiesDatabase.cities;
    let a = cities.filter(a => a.city.match('Chen'));
    console.log(a, 'citylist')
    res.send(a);

})

var server = app.listen(7000, function () {
    //    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:", port)
})