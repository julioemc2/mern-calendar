const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//console.log( process.env );


// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') );

app.use('/api/events', require('./routes/events') );

// NOS SIRVE PARA IGNORAR LAS OTRAS URLS Y TTRABAJAR SIEMPRE CON LA RAIZ
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html' );
})


// TODO: CRUD: Eventos


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});