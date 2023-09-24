const express = require("express");

const router = express.Router();
const {
  registration,
  login,
  getRegis,
  getById,
} = require("../controllers/UsersController");

router.post("/registration", registration);
router.post("/login", login);
router.get("/getRegisation", getRegis);
router.get('/getUserById/:id', getById)
// router.post("/student", student);
module.exports = router;
