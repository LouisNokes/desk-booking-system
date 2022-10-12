import React, { FC, useState } from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';

interface bookingProps {

}

const location = [
    'Manchester', 'Gloucester'
];

const seatNum = [
    '1', '2', '3', '4', '5'
];

const time = ['11:00'];

export const BookingDesk: FC<bookingProps> = () => {
    return (
        <div className='Main-comp'>
            <h1 className='Comp-heading'>Desk booking</h1>
            <div className='Input-div'>
                <input placeholder='Title' className='Comp-input'></input>
                <input placeholder='Email' className='Comp-input' style={{ marginTop: 5 }}></input>
                <input placeholder='Name' className='Comp-input' style={{ marginTop: 5 }}></input>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={location} placeholder="Location" />
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={seatNum} placeholder="Desk number" />
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={time} placeholder="From" />
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={time} placeholder="Till" />


                <input placeholder='Description' className='Desc-input' style={{ marginTop: 600 }}></input>
                <button className='Submit-btn' style={{ marginTop: 800 }}>Submit</button>
            </div>


        </div>
    );
};

