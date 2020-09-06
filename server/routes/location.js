const express = require('express');



let app = express();
let Location = require('../models/location');
const location = require('../models/location');

/**
 *  Crear un nuevo Location
 */

app.post('/locations', (req, res) => {

    let body = req.body;
    if (body.LocationId != null) {
        Location.findOne({
            where: {
                id: body.LocationId
            }
        }).then(locations => {
            if (locations == null) {
                return res.status(404).json({
                    ok: false,
                    mensaje: 'Ubicación no encontrada.'
                });
            }
        })

    }

    let location = new Location({
        name: body.name.toUpperCase(),
        areaM2: body.areaM2,
        LocationId: body.LocationId
    });
    let locationID = body.LocationId;
    if (locationID == undefined) {
        locationID = null
    }
    Location.findOne({
        where: {
            LocationId: locationID,
            name: location.name
        }
    }).then(locations => {
        if (locations != null) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Ubicación ya existe.'
            });
        } else {
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
        }
    })



});

app.get('/locations', (req, res) => {
    Location.findAll({
        attributes: ['id', 'name', 'areaM2', 'LocationId']
    }).
    then(locations => {
            return res.status(200).json({
                ok: true,
                mensaje: locations
            });

        })
        .catch(err => {
            console.log(err);
            return res.status(400).json({
                ok: false,
                mensaje: err
            });
        })
});

module.exports = app;