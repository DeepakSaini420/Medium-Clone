const mongoose = require('mongoose');
require('dotenv').config();


function connectDB(){
    mongoose.connect(`mongodb+srv://payefok523:maTfxcbWVBsd2iIl@cluster0.9833ogg.mongodb.net/`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    const db = mongoose.connection;
    
    db.on('error',(err)=>{
        console.log(err);
    })
    
    db.on('open',()=>{
        console.log("MongoDB Connected!");
    })
}

module.exports = connectDB;