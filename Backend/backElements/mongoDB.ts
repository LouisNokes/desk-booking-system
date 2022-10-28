const express1 = require('express');
const mongoose = require('mongoose');

const models: any = require("../models/mongoSchemas");
const mongoRoutes = require('../routes/mongoRoutes');

const app = express1();

app.use(express1.json());

app.use('/api/', mongoRoutes);

function connecter() {
    mongoose.connect('mongodb+srv://LouisNokes:Password123@cluster0.qqhb1.mongodb.net/?retryWrites=true&w=majority').then(() => {
        /* app.listen(8000, () => {
            console.log("Listening on port 8000");
        }); */
    }).catch((error: string) => {
        console.log(error);
    });
};


// Add a booking Edward

function book( sites: string, seat: number, user: string, datefrom: string, dateto: string) {
    const newBooking = new models.bookingModel({
        bookingID: 90909,
        user: {
            usrID: 1577,
            name: user,
            email: "email@email.tech",
        },
        desk: {
            site: sites,
            number: seat,
        },
        fromDate: datefrom,
        toDate: dateto,

    });
    newBooking.save().then((resp: any) => console.log(resp));

};


//get all desks Edward
async function bookings() {
    const bookins = models.bookingModel;
    let somethin = await bookins.find({});
    return somethin;
    //.then((resp: any) => {return resp})

};
// Check availability for timeframe 


// Get a single desk for a site


// Check if a user exist
function userCheck(email: string) {
    const user = models.userModel;
    let resp = "";
    user.findOne({}).then((resp: any) => console.log(resp)).then((mongoose.connection.close()));

};


// Add a booking



// Stretch goals

async function getAllDesks(sitea : string) {
    const bookins = models.deskModel;
    console.log(sitea);
    let things = bookins.find({site : sitea}).then((resp: any) => {return resp});
    console.log(things);
    return things;

};
// General availability





module.exports.connecter = connecter;

module.exports.bookings = bookings;
module.exports.book = book;
module.exports.userCheck = userCheck;
module.exports.getAllDesks = getAllDesks;
