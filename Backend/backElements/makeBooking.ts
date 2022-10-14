

const bookerDesk ={

   "Manchester": [
      {
         "bookingID": 1,
         "usrID": 1577,
         "fromDate": "10/12/2022",
         "toDate": "13/12/2022",
         "fromTime": "0800",
         "toTime": "1500",
         "seatNum" : 11
      },
      {
         "bookingID": 2,
         "usrID": 1577,
         "fromDate": "15/12/2022",
         "toDate": "15/12/2022",
         "fromTime": "0830",
         "toTime": "1700",
         "seatNum" : 13
      }
   ],

   "Gloucester": [
      {
         "bookingID": 1,
         "usrID": 1577,
         "fromDate": "10/12/2022",
         "toDate": "13/12/2022",
         "fromTime": "0800",
         "toTime": "1500",
         "seatNum" : 10
      },
      {
         "bookingID": 2,
         "usrID": 2892,
         "fromDate": "15/12/2022",
         "toDate": "15/12/2022",
         "fromTime": "0830",
         "toTime": "1700",
         "seatNum" : 15
      }
   ]
};

function bookDesk(attemptBooking : any ){
   
    console.log(attemptBooking);
   // var bookings : Array<object> = [];
   
    if(attemptBooking.site === "Gloucester"){var bookings : any = bookerDesk.Gloucester }
   //console.log(attemptBooking.id,attemptBooking.seat,attemptBooking.datefr,attemptBooking.dateto);
   else if(attemptBooking.site === "Manchester"){var bookings : any = bookerDesk.Manchester }
   else{
      var bookings : any = [];
   }

   const bookingId = bookings.length + 1;
    const booking = {
      //make booking object to push
      "bookingID": bookingId,
         "usrID": attemptBooking.id,
         "fromDate": attemptBooking.datefr,
         "toDate": attemptBooking.dateto,
         "seatNum" : attemptBooking.seat
   }
   //console.log(bookings);

   const newFile = bookings.push(booking);
   console.log(bookerDesk);


   //bookings is an array of every previous booking for the site + the new one
   //this just needs to overwrite the previous bookings for each site. 

   return bookings[bookings.length-1];
    
};


//backup function to show a booking was created
function bookingsCreated(site : string){
   if(site === "Gloucester"){var bookin : any = bookerDesk.Gloucester }
   //console.log(attemptBooking.id,attemptBooking.seat,attemptBooking.datefr,attemptBooking.dateto);
   else if(site === "Manchester"){var bookin : any = bookerDesk.Manchester }
   else{
      var bookin : any = [];
   }
   return bookin;
};
 

module.exports.bookDesk = bookDesk;
module.exports.bookingsCreated = bookingsCreated