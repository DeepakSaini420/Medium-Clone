const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true  
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Users',
      required:true
    },
    searchTags:{
      type:[String],
      require:true
    },
    data:mongoose.Schema.Types.Mixed
},{
  timestamps:true
})

module.exports = mongoose.model('Blog',blogSchema);