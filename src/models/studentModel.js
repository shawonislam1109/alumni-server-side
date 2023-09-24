const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },
    currentJobLocation: { type: String },
    previousJobLocation: { type: String },
    currentStatus: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const studentModel = mongoose.model("student", dataSchema);

module.exports = studentModel;
