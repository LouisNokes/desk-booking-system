const express = require('express');
const { mongoDesks, mongoSingleDesk, mongoBookingByDate, mongoUserExist, mongoAllBookings } = require('../backElements/mongoController');

const router = express.Router();

//Get all desk for site
router.get('/desk/site/:site', mongoDesks);

//Get a single desk
router.get('/desk/:id', mongoSingleDesk);

//Get a booking for date range/site
router.get('/bookings/site/:site/fromDate/:fromDate/toDate/:toDate', mongoBookingByDate);

//Get all bookings for a site
router.get('/booking/site/:site', mongoAllBookings);

//Check user exist
router.get('/user/:id', mongoUserExist);



module.exports = router;
