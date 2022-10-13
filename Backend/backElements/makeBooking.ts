const bookerDesk =
{
   "Manchester": [{
      "seatNum": 1,
      "Date-fr": '03/10/2022',
      "Date-to": '03/10/2022',
      "isBooked": true
   },
   {
      "seatNum": 1,
      "Date-fr": '04/10/2022',
      "Date-to": '04/10/2022',
      "isBooked": true
   },
   {
      "seatNum": 2,
      "Datefr": '05/10/2022',
      "Dateto": '05/10/2022',
      "isBooked": false

   }],
   "Gloucester": [{
      "seatNum": 1,
      "Date-fr": '03/10/2022',
      "Date-to": '03/10/2022',
      "isBooked": true
   },
   {
      "seatNum": 1,
      "Date-fr": '04/10/2022',
      "Date-to": '04/10/2022',
      "isBooked": true
   },
   {
      "seatNum": 6,
      "Datefr": '05/10/2022',
      "Dateto": '05/10/2022',
      "isBooked": false

   }]
};
function bookDesk(attemptBooking : any ){

    console.log(attemptBooking);
    if(attemptBooking.site === "Gloucester"){console.log(attemptBooking.id,attemptBooking.seat,attemptBooking.datefr,attemptBooking.dateto);};
  

   return null;//Return desk booking on success
    
    
};


module.exports.bookDesk = bookDesk;