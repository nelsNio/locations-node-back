const express = require('express');



let app = express();
let Location = require('../models/location');
const location = require('../models/location');

/**
 *  Crear un nuevo Location
 */

app.post('/locations', (req, res) => {

    let body = req.body;

    let location = new Location({
        name: body.name,
        areaM2: body.areaM2
    });

    location.save().then(
        function(data) {
            return res.status(200).json({
                ok: true,
                mensaje: data
            });
        }).catch(
        function(err) {
            return res.status(400).json({
                ok: false,
                mensaje: err
            });
        });

});

app.get('/locations', (req, res) => {
    Location.findAll({ attributes: ['name', 'areaM2'] }).
    then(locations => {
            return res.status(200).json({
                ok: true,
                mensaje: locations
            });

        })
        .catch(err => {
            return res.status(400).json({
                ok: false,
                mensaje: err
            });
        })
});

module.exports = app;