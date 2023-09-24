const { default: mongoose } = require("mongoose");
const UsersModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
// Registration
exports.registration = (req, res) => {
  let reqBody = req.body;

  UsersModel.create(reqBody, (err, data) => {
    // console.log(data);
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
// login
exports.login = (req, res) => {
  let reqBody = req.body;
  UsersModel.aggregate(
    [
      { $match: reqBody },
      {
        $project: { _id: 1, email: 1, password: 1, firstName: 1, lastName: 1 },
      },
    ],
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "fail", data: err });
      } else {
        if (data.length > 0) {
          let payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0]["email"],
          };
          let token = jwt.sign(payload, "SecretKey123456789");
          res
            .status(200)
            .json({ status: "success", token: token, data: data[0] });
        } else {
          res.status(401).json({ status: "unauthorized" });
        }
      }
    }
  );
};

exports.getRegis = (req, res) => {
  UsersModel.find({}, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

exports.getById = (req, res) => {
  let id = req.params.id 
  UsersModel.findOne(query , (err ,data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  })
}
