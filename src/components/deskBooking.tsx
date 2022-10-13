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



const time = ['11:00'];

export const BookingDesk: FC<bookingProps> = () => {
    //Defines state of variables for use with the form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dates, setDates] = useState<any>();
    const [loc, setLoc] = useState<string>();
    const [seat, setSeat] = useState<string>();


    //Created a state variable for recieving the most recent booking
    const [sucBooking, setSucBooking] = useState<object>();


    //When form submit run this code, should send POST request to backend
    const handleSubmit = (event : any) =>{
        event.preventDefault();
        alert(`Email ${email} , Loc ${loc} , seat ${seat} , date from ${dates[0]} , date to ${dates[1]}`)

    };

    //sets default variables for seat numbs and initaites seatNumb state variable
    const [seatNumb, setSeatNumb] = useState([ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

    //Updates state variable SeatNumb to site specific as grabbed by API
    const updateSeats = (val : string) => {
        //Default form handling
        setLoc(val); 
        
        //Clears seatNum variable 
        setSeatNumb([]);
        //defines an array of strings for temporary storage
        let localSN : Array<string> = [];
        //Get data from API
        fetch(`http://localhost:8000/api/desks/${val}`)
        .then((response) => response.json())
        .then((actualData) => {console.log(actualData);
            //Iterate for each object inside actualData(Recieved from api) and pushes the seatnum element to the temporary array
         actualData.map((item : any,key : any) => {
           if("seatNum" in item){localSN.push(item.seatNum);};
            console.log(item.seatNum);
         })   
         //sets seat numbers to the same as local array.
         setSeatNumb(localSN);   
        });
        
        


    };

    //Return the form (Console.logs there for development purposes only )
    return (
        <div className='Main-comp'>
            <form onSubmit={handleSubmit}>
            <h1 className='Comp-heading'>Desk booking</h1>
            {/* Input div for name and email*/}
            <div className='Input-div'>
                <input placeholder='Email' className='Comp-input' style={{ marginTop: 5 }} type="text" value={email} onChange={(e) => {setEmail(e.target.value); console.log(email);}}></input>
                <input placeholder='Name' className='Comp-input' style={{ marginTop: 5 }} value={name} onChange={(e) => {setName(e.target.value); console.log(name);}}></input>
            </div>
            {/* First dropdown menu div , Location and seats*/}
            <div className='Drop-div'>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={locations} placeholder="Location" value={loc} onChange={(e) => {updateSeats(e.value);}}/>
                <Dropdown className='Drop-down' arrowClassName='Arrow-class' options={seatNumb} placeholder="Desk number" value={seat} onChange={(e) => {setSeat(e.value); console.log(seat);}}/>
            </div>
            {/* Second dropdown menu div, time selection */}
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

