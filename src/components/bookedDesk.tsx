import React, { FC } from 'react';
import '../App.css';
import { Desk } from './desk';

interface BookedProps {

}

export const BookedDesk: FC<BookedProps> = () => {
    return (
        <div className='Second-comp'>
            <h1 className='Comp-heading'>Booked desk</h1>
            <Desk deskNum={1}></Desk>
        </div>
    );
};


