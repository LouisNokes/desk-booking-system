import express from "express";
const app = express();
var mysql2      = require('mysql2');

function sqlmyconnector(){
var connection = mysql2.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'desk_savers'
});
connection.connect();
return connection};
let connection = sqlmyconnector();



//Get all desks for a site......................
function sqlgetAllDesks(site:String){connection.query('SELECT * FROM desks INNER JOIN sites ON desks.site_idA = sites.site_id WHERE sites.site = "' +site+'"' , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});}
sqlgetAllDesks('Gloucester'
);



//Get all bookings for a given date..................
let date1= new Date('2022-10-26')
let date2 = new Date('2022-10-28')

function sqlgetAllBookings(site:String,desk:Number, dateto:Date,datefrom:Date )
{ let date3 = "'"+ dateto.getUTCFullYear() + '-' + (dateto.getMonth()+1) + "-" + dateto.getDate()+"'" ;
let date4 = "'"+ datefrom.getUTCFullYear() + '-' + (datefrom.getMonth()+ 1) + '-' + datefrom.getDate() +"'" ;
 connection.query('SELECT * FROM desk_bookings INNER JOIN sites ON desk_bookings.booking_site = sites.site_id WHERE sites.site = "' +site+'" AND booking_desk = '+desk+' AND ((booking_datefrom >= '+date4+' AND booking_datefrom <= '+date3+') OR (booking_dateto <= '+date3+' AND booking_dateto >= '+date4+') OR (booking_datefrom <= '+date4+' AND booking_dateto >= '+date3+')) '  , (err:any, result : any)=>{
  if (err) throw err;
    return result;
});} 
//console.log(date1.getFullYear())

sqlgetAllBookings('Manchester',12, date1 ,date2)

;
 



//Get a single desk for a given site..............
function sqlgetSingleDesk (site:String, desks:Number){connection.query('SELECT * FROM desks INNER JOIN sites ON desks.site_idA = sites.site_id WHERE desk_number = '+desks+'  AND  site = "'+site+'"' , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});}
sqlgetSingleDesk('Gloucester',7
);






//ADD A BOOKING.............................
function sqlAddBooking(book_desk:Number,book_site:Number,book_datefrom:Date,book_dateto:Date, book_userid:Number)
{if(sqlgetAllBookings('Manchester',12, new Date('2022-10-28'),new Date('2022-10-26')) != null)
{return null
}

let post = { booking_desk:book_desk ,booking_site:book_site, booking_datefrom:book_datefrom, booking_dateto:book_dateto,booking_userid:book_userid };
let sql = "INSERT INTO desk_bookings SET ?";
connection.query(sql, post, (err: any) => {

  if (err) {

    throw err;
};

})}
sqlAddBooking(12,12,new Date('2022-05-15'),new Date('2022-05-20'),3);









//app.listen(8000, () => console.log('Listening for queries on port 8000')); 



module.exports.myconnector = sqlmyconnector;
module.exports.getAllDesks = sqlgetAllDesks;
module.exports.getAllBookings = sqlgetAllBookings;
module.exports.getSingleDesk = sqlgetSingleDesk;
module.exports.AddBooking = sqlAddBooking;









