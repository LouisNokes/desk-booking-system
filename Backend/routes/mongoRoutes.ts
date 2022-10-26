const express = require('express');
const { mongoDesks, mongoSingleDesk, mongoBookingByDate, mongoUserExist } = require('../backElements/mongoController');

const router = express.Router();

//Get all desk for site
router.get('/desk/site/:site', mongoDesks);

//Get a single desk
router.get('/desk/:id', mongoSingleDesk);

//Get a booking for date
router.get('/booking/site/:site/fromDate/:fromDate', mongoBookingByDate);

//Check user exist
router.get('/user/:id', mongoUserExist);

module.exports = router;
