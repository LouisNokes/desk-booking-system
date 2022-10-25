import express from "express";
const mongoose = require('mongoose');
const app = express();
const models : any = require("../models/mongoSchemas");


function connecter() {
    mongoose.connect('mongodb+srv://LouisNokes:Password123@cluster0.qqhb1.mongodb.net/?retryWrites=true&w=majority').then(() => {
        app.listen(8000, () => {
            console.log("Listening on port 8000");
        });
    }).catch((error: string) => {
        console.log(error);
    });
}

// Mandatory 

// Get all desk for a site
function Mongodesks(site: string) {


    console.log("Connected");
    return "[{},{},{}]"
};

// Get a single desk for a site


// Add a booking Edward

function book(sites : string ,seat : number,user : string,datefrom : string,dateto : string){
    const newBooking = new models.booking({
        bookingID : 99999,
        user: {
            usrID : 1577,
            name : user,
            email : "email@email.tech",
        },
        desk: {
            site : sites,
            number : seat,
        },
        fromDate : datefrom,
        toDate : dateto,

    });
    newBooking.save().then((resp : any) => console.log(resp));

};

//get all desks Edward
function bookings(){
    const bookins = models.booking ;
    bookins.find({}).then((resp : any) => console.log(resp));

};
// Check availability for timeframe 


// Check if a user exist
function userCheck(email : string){
    const user = models.user ;
    let resp = "";
    user.findOne({}).then((resp : any) => console.log(resp)).then((mongoose.connection.close()));

};


// Stretch goals

// Get a users bookings

// General availability





module.exports.connecter = connecter;
module.exports.desks = Mongodesks;


module.exports.bookings = bookings;
module.exports.book = book;
module.exports.userCheck = userCheck;