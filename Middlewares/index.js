const express = require('express');
const app = express();


const rutas = require('./rutas');

app.use('/', rutas);

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("servidor en http://localhost:"+port)
}); 
