const express = require("express");

const router = express.Router();
const {
  registration,
  login,
  getRegis,
  getById,
  deleteById,
  updateUser,
} = require("../controllers/UsersController");

router.post("/registration", registration);
router.post("/login", login);
router.get("/getRegisation", getRegis);
router.get('/getUserById/:id', getById)
router.delete('/deleteById/:id',deleteById)
router.put('/updateUser/:id' , updateUser)
// router.post("/student", student);
module.exports = router;
