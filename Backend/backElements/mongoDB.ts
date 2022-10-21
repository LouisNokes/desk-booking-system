import express from "express";
const mongoose = require('mongoose');
const app = express();



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


// Add a booking


// Check availability for timeframe


// Check if a user exist



// Stretch goals

// Get a users bookings

// General availability





module.exports.connecter = connecter;
module.exports.desks = Mongodesks;
