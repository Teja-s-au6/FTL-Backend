const { Router } = require("express");
const router = Router()
const { createUser,createActivityPeriod,getAllUsers,deleteUser} = require("../controllers/apiController");
const authenticate = require("../middleware/authenticate");

//  creating the user 
router.post('/createUser', createUser);

//  creating activityperiod 
router.post('/createActivityPeriod/:userId', authenticate, createActivityPeriod);

//  getAllUsers
router.get('/users', getAllUsers);

//  deleteUser
router.delete('/deleteUser/:userId', authenticate, deleteUser);


module.exports = router;