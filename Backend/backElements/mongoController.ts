import { Request, Response } from 'express';
const { deskModel, userModel, bookingModel } = require('../models/mongoSchemas');
const mongoose = require('mongoose');

// Get all desk for a site
const mongoDesks = async (req: Request, res: Response) => {
    // Change this so its not hard coded..
    const desk = await deskModel.find({ site: "Manchester" }).sort({ number: -1 });

    return res.status(200).json(desk);
}

// Get a single desk for a site
const mongoSingleDesk = async (req: Request, res: Response) => {
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
const mongoBookingByDate = async (req: Request, res: Response) => {
    // Added createdAt field
    const booking = await bookingModel.find({ fromDate: "22/03/2022" });

    return res.status(200).json(booking);
}

// Check if a user exist
const mongoUserExist = async (req: Request, res: Response) => {
    const { id } = req.params;

    // If the ID param is invalid run this
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No user exist" })
    }

    const userExist = await userModel.findById(id);

    return res.status(200).json(userExist);
}


export = {
    mongoDesks,
    mongoSingleDesk,
    mongoBookingByDate,
    mongoUserExist,
}