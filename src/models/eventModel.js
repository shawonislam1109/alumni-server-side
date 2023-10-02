const mongoose = require('mongoose')
const eventSchema = mongoose.Schema({
    thumbnail : {
        type  : String 
    },
    startDate : {
        type : String
    },
    location : {
        type : String
    },
    fee : {
        type : Number 
    },
    batch : {
        type : String
    },
    department : {
        type : String
    },
    description : {
        type : String
    },
    createdDate: { type: Date, default: Date.now() },
})

const eventModel =  mongoose.model('event' , eventSchema) 
module.exports = eventModel