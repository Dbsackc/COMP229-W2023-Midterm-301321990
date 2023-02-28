let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    //Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "booklist"
});

module.exports = mongoose.model('Book', Book);
