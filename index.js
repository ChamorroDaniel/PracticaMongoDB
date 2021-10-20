console.log('Hola mundo');
const cors  = require('cors');
const express = require('express'); 
require('dotenv').config();//de esta forma se importa en node
const {dbConection} = require('./config/database');
//Creando el servidor express
const app = express();

app.use(cors());


//Lectura y parseo del body
app.use(express.json());
//Conexion a la BD
dbConection();

//Rutas de la API
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/entrenadores', require('./routes/entrenadores.routes'));
app.use('/api/paises', require('./routes/paises.routes'));
app.use('/api/estadios', require('./routes/estadios.routes'));
app.use('/api/clubes', require('./routes/clubes.routes'));
app.use('/api/login', require('./routes/auth.routes'));
app.use('/api/jugadores', require('./routes/jugadores.routes'));
app.use('/api/busquedas', require('./routes/busquedas.routes'));
app.use('/api/uploads', require('./routes/uploads.routes'));

//Para levantar el servidor
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})