import React, { FC } from 'react';
import '../App.css';

interface BookedProps {
    deskNum: number
}

export const Desk: FC<BookedProps> = (deskNum) => {
    return (
        <div>
            <div className='Desk-comp'>
                <p style={{ color: 'black', fontSize: 15 }}>Desk 1</p>
                <p style={{ color: 'black', fontSize: 15 }}>Location:</p>
                <p style={{ color: 'green', fontSize: 15 }}>Available</p>
            </div>
            <div className='Desk-comp'>
                <p style={{ color: 'black', fontSize: 15 }}>Desk 2</p>
                <p style={{ color: 'black', fontSize: 15 }}>Location:</p>
                <p style={{ color: 'red', fontSize: 15 }}>Booked: 10am - 2pm</p>
            </div>
        </div>
    );
};


