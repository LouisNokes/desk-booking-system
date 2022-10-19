import React, { FC } from 'react';
import '../App.css';


const Desk: FC<any> = ({ desk }) => {
    return (
        <div>
            <p>{desk.seatNum}</p>
        </div>
    );
};

export default Desk;


