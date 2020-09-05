/**
 * Puerto
 */

process.env.PORT = process.env.PORT || 3000;
/**
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/**
 * Base de datos
 */
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'localhost';
} else {
    urlDB = '';
}
let DB;
if (process.env.NODE_ENV === 'dev') {
    DB = 'demo';
} else {
    DB = 'locations-admn';
}
let USERNAME;
if (process.env.NODE_ENV === 'dev') {
    USERNAME = 'postgres';
} else {
    USERNAME = process.env.USERNAME;
}

let PASSWORD;
if (process.env.NODE_ENV === 'dev') {
    PASSWORD = 'a123';
} else {
    PASSWORD = process.env.PASSWORD;
}


process.env.URL_DB = urlDB;
process.env.DB = DB;
process.env.USERNAME = USERNAME;
process.env.PASSWORD = PASSWORD;