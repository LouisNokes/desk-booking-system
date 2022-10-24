const { deskModel, userModel, bookingModel } = require('../models/mongoSchemas');
const mongoose = require('mongoose');

// Get all desk for a site
const mongoDesks = async (req: any, res: any, site: String) => {
    // Change this so its not hard coded..
    const desk = await deskModel.find({ site: "Manchester" });

    res.status(200).json(desk);
}

// Get a single desk for a site
const mongoSingleDesk = async (req: any, res: any, site: String) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such seat exist" })
    }
    // Change this so its not hard coded..
    const singleDesk = await deskModel.find({ _id: id, site: "Manchester" });

    if (!singleDesk) {
        return res.status(404).json({ error: 'No such seat exist' })
    }
    return res.status(200).json(singleDesk);

}

// Get all bookings by a date
const mongoBookingByDate = async (req: any, res: any, date: String) => {
    // Added createdAt field
    const booking = await bookingModel.find({ fromDate: "22/03/2022" });

    res.status(200).json(booking);
}

// Check if a user exist
const mongoUserExist = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No user exist" })
    }

    const userExist = await userModel.findById(id);

    if (!userExist) {
        return res.status(404).json({ error: 'No user exist' })
    }

    res.status(200).json(userExist);
}


export = {
    mongoDesks,
    mongoSingleDesk,
    mongoBookingByDate,
    mongoUserExist,
}