/* books.js Chan Kai Chung 301321990 Mid-Term Test*/
let mongoose = require('mongoose');

// create a model class, removed Description since there are no such attributes in the database
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
