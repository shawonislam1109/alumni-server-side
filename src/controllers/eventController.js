const eventModel = require('../models/eventModel')

// Event section 
exports.Event = (req , res) => {
    let reqBody = req.body ; 
    eventModel.create(reqBody , (err, data)=> {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
          } else {
            res.status(200).json({ status: "success", data: data });
          }
    })
}


// event all data Get
exports.eventAll = (req , res) => {
    eventModel.find({} , (err , data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
          } else {
            res.status(200).json({ status: "success", data: data });
          }
    })
}

// singleEvent Get data 
exports.singleEvent = (req , res) => {
    let id = req.params.id ; 
    eventModel.findById( id, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
          } else {
            res.status(200).json({ status: "success", data: data });
          }
    })
}