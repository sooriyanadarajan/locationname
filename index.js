var express = require('express');

const app = express()
app.use(express.json())
const indianCitiesDatabase = require('indian-cities-database');

app.post('/', function (req, res) {

const value = req.body.location
    var cities = indianCitiesDatabase.cities;
    let a = cities.filter(a => a.city.match(value));
    res.send(a);
})

var server = app.listen(7000, function () {
    //    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:", port)
})