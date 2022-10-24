const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
});

const deskSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
});

const bookingSchema = new Schema({

    bookingID: Number,
    user: {
        usrID: Number,
        name: String,
        email: String,
        required: true
    },
    desk: {
        site: String,
        number: Number,
        freetext: String
    },
    fromDate: String,
    toDate: String,
    fromTime: String,
    toTime: String,
    required: false,
});

module.exports.user = mongoose.model('User', userSchema);
module.exports.desk = mongoose.model('Desk', deskSchema);
module.exports.booking = mongoose.model('Booking', bookingSchema);