const bookedDesk =
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

function getBookings(site: string, seatNum: string, datefr?: string, dateto?: string) {
   const bookArrMan = bookedDesk.Manchester;
   const bookArrGlo = bookedDesk.Gloucester;


   if (site === "Manchester") {
      const siteBookings = bookArrMan.filter(booking => {
         return booking.seatNum === parseInt(seatNum)
      })
      return siteBookings;
   } else if (site === "Gloucester") {
      const siteBookings = bookArrGlo.filter(booking => {
         return booking.seatNum === parseInt(seatNum)
      })
      return siteBookings;

   }

};

function getUsrBooking(usrID: string, site?: string, seat?: string, datefr?: string, dateto?: string) {




   return null;//Return desk bookings


};

module.exports.getUsrBooking = getUsrBooking;
module.exports.getBookings = getBookings;