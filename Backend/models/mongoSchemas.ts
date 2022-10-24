const mongoose1 = require('mongoose');

const Schema = mongoose1.Schema;

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
    site: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
});

const bookingSchema = new Schema({

    bookingID: Number,
    user: {
        usrID: Number,
        name: String,
        email: String,
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
});

const userModel = mongoose1.model('User', userSchema);
const deskModel = mongoose1.model('Desk', deskSchema);
const bookingModel = mongoose1.model('Booking', bookingSchema);

module.exports = {
    userModel,
    deskModel,
    bookingModel
}