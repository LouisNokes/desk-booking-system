<<<<<<< Updated upstream
import React, { FC } from 'react';
import '../App.css';
=======
import "../App.css";
import { Desk } from "./desk";
import React, { FC, useState } from "react";
>>>>>>> Stashed changes

interface BookedProps {}

export const BookedDesk: FC<BookedProps> = () => {
<<<<<<< Updated upstream
    return (
        <div className='Second-comp'>

        </div>
    );
};

=======
  const [seatGap, setseatGap] = useState<any>();
  //Updates state variable SeatNumb to site specific as grabbed by API
  const retrieveSeats = (val: string) => {
    //defines an array of strings for temporary storage
    let localSN: Array<string> = [];
    //Get data from API
    fetch(`http://localhost:8000/api/desks/${val}`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);

        setseatGap(actualData);
        //Iterate for each object inside actualData(Recieved from api) and pushes the seatnum element to the temporary array
        //  actualData.map((item: any, key: any) => {
        //    if ("seatNum" in item) { localSN.push(item.seatNum); };
        //  console.log(item.seatNum);})
      });
  };

  retrieveSeats("Manchester");
  console.log(seatGap);
  // const seatRetriever = seatGap.map((item: any, key: any) => {});
  return (
    <div className="Second-comp"> 
      {seatGap.map((item: any, key: any) => {
        <h1>{item.seatNum}</h1>;
      })}
      <h1 className="Comp-heading">Booked desk</h1>
      <Desk deskNum={1}></Desk>
    </div>
  );
};
>>>>>>> Stashed changes
