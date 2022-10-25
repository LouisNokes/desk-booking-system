import React, { FC } from 'react';
import '../App.css';


const Desk: FC<any> = ({ desk }) => {
    return (
        <div className="Desk-comp">
            <p className="Desk-text">Desk: {desk.number}</p>
            <p className="Desk-text">Site: {desk.site}</p>


        </div>
    );
};

export default Desk;


