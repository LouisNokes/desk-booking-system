import React, { FC, useState } from 'react';
import Dropdown from 'react-dropdown';
import DateRangePicker from 'rsuite/DateRangePicker';
import '../App.css';
import logo from './logo.png';

interface bookingProps {

}

const locations = [
    'Manchester', 'Gloucester'
];

const seatNum = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
];

const time = ['11:00'];

export const BookingDesk: FC<bookingProps> = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dates, setDates] = useState<any>();
    const [loc, setLoc] = useState<string>();
    const [seat, setSeat] = useState<string>();



    const handleSubmit = (event : any) =>{
        event.preventDefault();
        alert(`Email ${email} , Loc ${loc} , seat ${seat} , date from ${dates[0]} , date to ${dates[1]}`)
    };




    return (
        <div className='Main-comp'>
            <form onSubmit={handleSubmit}>
            <h1 className='Comp-heading'>Desk booking</h1>
            {/* Input div */}
            <div className='Input-div'>
                <input placeholder='Email' className='Comp-input' style={{ marginTop: 5 }} type="text" value={email} onChange={(e) => {setEmail(e.target.value); console.log(email);}}></input>
                <input placeholder='Name' className='Comp-input' style={{ marginTop: 5 }} value={name} onChange={(e) => {setName(e.target.value); console.log(name);}}></input>
            </div>
            {/* First dropdown menu div */}
            <div className='Drop-div'>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={locations} placeholder="Location" value={loc} onChange={(e) => {setLoc(e.value); console.log(loc);}}/>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={seatNum} placeholder="Desk number" value={seat} onChange={(e) => {setSeat(e.value); console.log(seat);}}/>
            </div>
            {/* Second dropdown menu div */}
            <div className='Drop-div-2'>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={time} placeholder="From" />
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={time} placeholder="Till" />
            </div>
            <div className='Calendar-div'>
                <DateRangePicker className='calendar' showOneCalendar value={dates} onChange={(event) => {setDates(event!); console.log(dates);} } />

            </div>
            {/* Logo div */}
            <div className='Logo-div'>
                <img src={logo} className='logo'></img>
            </div>
            {/* Description div + submit button */}
            <div className='Desc-div'>
                <input placeholder='Description' className='Desc-input' ></input>
                <button className='Submit-btn' type="submit" >Submit</button>
            </div>
            </form>
        </div>
    );
};

