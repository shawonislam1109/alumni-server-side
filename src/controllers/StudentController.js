const studentModel = require("../models/studentModel");

// studentModel
exports.student = (req, res) => {
  let reqBody = req.body;
  studentModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "fail", data: data });
    }
  });
};
