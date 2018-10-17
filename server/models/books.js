const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    author: {type: String, required: true, trim: true},
    pages: {type: Number, required: false, trim:true},
    price: {type: Number},
    stores: {type:[], default:null}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book}