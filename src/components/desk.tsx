import React, { FC } from 'react';
import '../App.css';


const Desk: FC<any> = ({ desk }) => {
    return (
        <div className="Desk-comp">
            <p className="Desk-text">Desk: <b>{desk.number}</b></p>
            <p className="Desk-text">Site: <b>{desk.site}</b></p>
            <p className="Desk-un"><b>Unavailable</b></p>
        </div>
    );
};

export default Desk;


