const express = require('express');
const { mongoDesks, mongoSingleDesk, mongoBookingByDate, mongoUserExist } = require('../backElements/mongoBackel');

const router = express.Router();


//Get all desk for site
router.get('/desk', mongoDesks);

//Get a single desk
router.get('/desk/:id', mongoSingleDesk);

//Get a booking for date
router.get('/booking', mongoBookingByDate);

//Check user exist
router.get('/user/:id', mongoUserExist);

module.exports = router;
