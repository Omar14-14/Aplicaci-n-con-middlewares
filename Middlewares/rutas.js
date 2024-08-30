const rutas = require("express").Router();
const { fechita, saludo } = require('./middleware'); 

rutas.get("/", fechita, (req, res) => {
    res.send("Estas en ruta 1");
});

rutas.get("/ruta2", fechita, saludo, (req, res) => {
    res.send("Estas en ruta 2");
});

rutas.get("/ruta", fechita, saludo, (req, res) => {
    res.send("Estas en ruta 3");
});

module.exports = rutas;