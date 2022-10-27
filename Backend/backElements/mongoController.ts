import { Request, Response } from 'express';
const { deskModel, userModel, bookingModel } = require('../models/mongoSchemas');
const mongoose = require('mongoose');


// Get all desk for a site
const mongoDesks = async (req: Request, res: Response): Promise<Response> => {
    const { site } = req.params
    console.log(site);

    const desk = await deskModel.find({ site });
    console.log(desk);

    return res.status(200).json(desk);
}

// Get all bookings for a site
const mongoAllBookings = async (req: Request, res: Response): Promise<Response> => {
    const { site } = req.params
    console.log(site);

    const booking = await bookingModel.find({ "desk.site": site });
    return res.status(200).json(booking);
}


// Get a single desk for a site
const mongoSingleDesk = async (req: Request, res: Response): Promise<Response> => {
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


// Get all bookings by date range and site
const mongoBookingByDate = async (req: Request, res: Response): Promise<Response> => {
    const { site, fromDate, toDate } = req.params;
    // Take data from the params and turn it into a date

    let date1 = new Date(fromDate);
    let date2 = new Date(toDate);

    let date3 = "'" + date1.getUTCFullYear() + '-' + (date1.getMonth() + 1) + "-" + date1.getDate() + "'";
    let date4 = "'" + date2.getUTCFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate() + "'";

    console.log(site, date3, date4);
    // Added createdAt field
    const booking = await bookingModel.find({ "desk.site": site, fromDate, toDate });

    return res.status(200).json(booking);
}

// Check if a user exist
const mongoUserExist = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    // If the ID param is invalid run this
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No user exist" })
    }

    const userExist = await userModel.findById(id)

    return res.status(200).json(userExist);
}



export = {
    mongoDesks,
    mongoSingleDesk,
    mongoBookingByDate,
    mongoUserExist,
    mongoAllBookings
}