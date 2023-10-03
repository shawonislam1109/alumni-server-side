const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    // mobile: { type: String },
    password: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
    currentJobLocation: {
      type: String,
    },
    previousJobLocation: {
      type: String,
    },
    currentStatus: {
      type: String,
    },
    department : {
      require : true,
      type : String
    },
    jobStatus : {
      type : Boolean
    },
    thumbnail: {
      type : String
    },
    // photo: { type: String },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);
const UsersModel = mongoose.model("users", DataSchema);
module.exports = UsersModel;
