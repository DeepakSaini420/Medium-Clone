const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userImg:{
        type:String
    },
    publishedBlogs:[{type:mongoose.Schema.Types.ObjectId,ref:'Blog'}],
    savedBlogs:[{type:mongoose.Schema.Types.ObjectId,ref:'Blog'}],
    Followers:[{type:mongoose.Schema.Types.ObjectId,ref:'Users'}],
    Following:[{type:mongoose.Schema.Types.ObjectId,ref:'Users'}],
},{
    timestamps:true
})

module.exports = mongoose.model('Users',userSchema);