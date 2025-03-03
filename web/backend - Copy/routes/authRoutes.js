const express = require('express');
const { signup, signin, submitStudentData } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);  //register
router.post('/signin', signin);  //login
router.post('/submitStudentData', submitStudentData);  //submit student data

module.exports = router;