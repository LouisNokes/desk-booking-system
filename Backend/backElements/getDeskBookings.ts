import { ModifierFlags } from "typescript";

const bookedDesk =
{
   "Manchester": [{
      "seatNum": 1,
      "Datefr": '03-10-2022',
      "Dateto": '03-10-2022',
   },
   {
      "seatNum": 1,
      "Datefr": '04-10-2022',
      "Dateto": '04-10-2022',
   },
   {
      "seatNum": 2,
      "Datefr": '05-10-2022',
      "Dateto": '05-10-2022',
   }],
   "Gloucester": [{
      "seatNum": 1,
      "Datefr": '03-10-2022',
      "Dateto": '03-10-2022',
   },
   {
      "seatNum": 1,
      "Datefr": '04-10-2022',
      "Dateto": '04-10-2022',
   },
   {
      "seatNum": 6,
      "Datefr": '05-10-2022',
      "Dateto": '05-10-2022',
   }]
};

function getBookingBySeat(site: string, seatNum: string) {
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

function getBookingByDate(site: string, seatNum: string, datefr: string) {
   const bookArrMan = bookedDesk.Manchester;
   const bookArrGlo = bookedDesk.Gloucester;

   if (site === "Manchester") {
      const siteBookings = bookArrMan.filter(booking => {
         return booking.seatNum === parseInt(seatNum) && booking.Datefr === datefr
      })
      return siteBookings;
   } else if (site === "Gloucester") {
      const siteBookings = bookArrGlo.filter(booking => {
         return booking.seatNum === parseInt(seatNum) && booking.Datefr === datefr
      })
      return siteBookings;
   }
}

function getUsrBooking(usrID: string, site?: string, seat?: string, datefr?: string, dateto?: string) {
   return null;//Return desk bookings
};

module.exports = {
   getUsrBooking,
   getBookingBySeat,
   getBookingByDate
}
