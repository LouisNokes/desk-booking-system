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

const time = ['11:00'];

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

