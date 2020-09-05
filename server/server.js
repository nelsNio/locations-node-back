/**
 * Importaciones
 */
require('./config/config');

const express = require('express');
// Using Node.js `require()`

const sequelize = require('./database/database');

//configura CORS
var cors = require('cors');



var bodyParser = require('body-parser');
const app = express();

app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

// CONFIGURACION GLOBAL DE RUTAS,   todas las rutas van en el index 
app.use(require('./routes/index'));


sequelize.authenticate()
    .then(() => {
        console.log('Base de datos online')
    })
    .catch(err => {
        console.log('No se conecto')
    })
    /*
    mongoose.connect(process.env.URL_DB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
        if (err) throw err;
        console.log('Base de datos online');
    });*/
app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);
});