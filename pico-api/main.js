const express = require('express');

require('dotenv').config();
const PORTA_SERVIDOR = process.env.PORTA;

const app = express();


const userRoutes = require('./src/routes/users/index');

const seguidoresRoutes = require('./src/routes/seguidores/index')

const postsRoutes = require('./src/routes/posts/index')

app.use(express.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

app.use('/api/users', userRoutes);

app.use('/api/seguidores', seguidoresRoutes);

app.use('/api/posts', postsRoutes);







app.listen(PORTA_SERVIDOR, () => {
    console.log('rodando')
})





