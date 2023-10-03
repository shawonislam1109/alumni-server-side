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
const { Event, eventAll, singleEvent, eventDelete } = require("../controllers/eventController");


// user data router
router.post("/registration", registration);
router.post("/login", login);
router.get("/getRegisation", getRegis);
router.get('/getUserById/:id', getById)
router.delete('/deleteById/:id',deleteById)
router.put('/updateUser/:id' , updateUser)

// Event data router
router.post('/event' , Event)
router.get('/eventAll', eventAll)
router.get('/singleEvent/:id' , singleEvent)
router.delete('/deleteEvent/:id' , eventDelete)
// router.post("/student", student);
module.exports = router;
