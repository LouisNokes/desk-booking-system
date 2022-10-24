const express1 = require('express');
const mongoose = require('mongoose');
const mongoRoutes = require('../routes/mongoRoutes');

const app = express1();

app.use(express1.json());

app.use('/api/', mongoRoutes);

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



// Get a single desk for a site


// Add a booking


// Stretch goals


// General availability





module.exports.connecter = connecter;

