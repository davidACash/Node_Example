const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    name: {type:String, required:true, trim:true},
    address: {type:String, required:true, trim:true},
    phone: {type: Number, validate:{
        validator:Number.isInteger,
        message:'{VALUE} is not an integer value'
    }},
});

const Store = mongoose.model('Store', storeSchema);

module.exports = {Store};