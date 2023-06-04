const http = require('http');
const app = require('./app');
const db = require('./database');
require('dotenv').config({
    path:'./.env'
})
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

db(); // Connecting to database

server.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
})