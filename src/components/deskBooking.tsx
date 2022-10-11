import React, { FC } from 'react';
import '../App.css';

interface bookingProps {

}

export const BookingDesk: FC<bookingProps> = () => {
    return (
        <div className='Main-comp'>
            <input placeholder='Title'></input>
            <input placeholder='Email'></input>
            <button>Submit</button>
        </div>
    );
};

