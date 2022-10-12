import React, { FC, useState } from 'react';
import Dropdown from 'react-dropdown';
import DateRangePicker from 'rsuite/DateRangePicker';
import '../App.css';
import logo from './logo.png';

interface bookingProps {

}

const location = [
    'Manchester', 'Gloucester'
];

const seatNum = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
];

const time = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', "23:30"];

export const BookingDesk: FC<bookingProps> = () => {
    return (
        <div className='Main-comp'>
            <h1 className='Comp-heading'>Desk booking</h1>
            {/* Input div */}
            <div className='Input-div'>
                <input placeholder='Email' className='Comp-input' style={{ marginTop: 5 }}></input>
                <input placeholder='Name' className='Comp-input' style={{ marginTop: 5 }}></input>
            </div>
            {/* First dropdown menu div */}
            <div className='Drop-div'>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={location} placeholder="Location" />
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={seatNum} placeholder="Desk number" />
            </div>
            {/* Second dropdown menu div */}
            <div className='Drop-div-2'>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={time} placeholder="From" />
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={time} placeholder="Till" />
            </div>
            <div className='Calendar-div'>
                <DateRangePicker className='calendar' showOneCalendar />

            </div>
            {/* Logo div */}
            <div className='Logo-div'>
                <img src={logo} className='logo'></img>
            </div>
            {/* Description div + submit button */}
            <div className='Desc-div'>
                <input placeholder='Description' className='Desc-input' ></input>
                <button className='Submit-btn' >Submit</button>
            </div>
        </div>
    );
};

