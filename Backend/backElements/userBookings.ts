const sam = {
   "bookings": [
      {
         "bookingID": 1,
         "usrID": 1577,
         "fromDate": "10/12/2022",
         "toDate": "13/12/2022",
         "fromTime": "0800",
         "toTime": "1500"
      },
      {
         "bookingID": 2,
         "usrID": 1577,
         "fromDate": "15/12/2022",
         "toDate": "15/12/2022",
         "fromTime": "0830",
         "toTime": "1700"
      }
   ]
}

function userBook(usrID: string) {
   const arr = sam.bookings;
   const person = arr.filter(usr => { return usr.usrID === parseInt(usrID) });
   console.log(person);
   return (person);

   //return null;//Return desk booking on success
};

module.exports.userBook = userBook;

//commit as new branch before messing around with code