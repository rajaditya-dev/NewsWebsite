const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  image: String,
  date: Date,
  language:{
    type: String,
    enum: ['en','hi'],
    default: 'en'
  },
  category:String
});

module.exports = mongoose.model('News', newsSchema);
