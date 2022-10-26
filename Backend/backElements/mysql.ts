import express from "express";
const app = express();
var mysql2      = require('mysql2');
var connection = mysql2.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'desk_savers'
});

connection.connect();

connection.query('SELECT * FROM users', (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});

/* //Get all desks for a site...............
function sqlgetAllDesks(site:String){connection.query('SELECT * FROM desks INNER JOIN sites ON desks.site_idA = sites.site_id WHERE sites.site = "' +site+'"' , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});}
 */
//sqlgetAllDesks('Gloucester'

//);

/* //Get all bookings for a given date...........
let date1= new Date('2022-10-26')
let date2 = new Date('2022-10-28')
let date3 = "'"+  date1.getUTCFullYear() + '-' + (date1.getMonth()+1) + "-" + date1.getDate()+"'" ;
let date4 = "'"+ date2.getUTCFullYear() + '-' + (date2.getMonth()+ 1) + '-' + date2.getDate() +"'" ;

function sqlgetAllbookings(site:String,desk:Number, dateto:String,datefrom:String )
{ let query = 'SELECT * FROM desk_bookings INNER JOIN sites ON desk_bookings.booking_site = sites.site_id WHERE sites.site = "' +site+'" AND booking_desk = '+desk+' AND ((booking_datefrom >= '+datefrom+' AND booking_datefrom <= '+dateto+') OR (booking_dateto <= '+dateto+' AND booking_dateto >= '+datefrom+') OR (booking_datefrom <= '+datefrom+' AND booking_dateto >= '+dateto+')) ' ;
console.log(query);
  connection.query('SELECT * FROM desk_bookings INNER JOIN sites ON desk_bookings.booking_site = sites.site_id WHERE sites.site = "' +site+'" AND booking_desk = '+desk+' AND ((booking_datefrom >= '+datefrom+' AND booking_datefrom <= '+dateto+') OR (booking_dateto <= '+dateto+' AND booking_dateto >= '+datefrom+') OR (booking_datefrom <= '+datefrom+' AND booking_dateto >= '+dateto+')) '  , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});} 
//console.log(date1.getFullYear())

sqlgetAllbookings('Manchester',12, date3 ,date4)

;
 */
/* //Get a single desk for a given site..............
function sqlgetSingleDesk (site:String, desks:Number){connection.query('SELECT * FROM desks INNER JOIN sites ON desks.site_idA = sites.site_id WHERE desk_number = '+desks+'  AND  site = "'+site+'"' , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});}

sqlgetSingleDesk('Gloucester',7

);
 */

//ADD A BOOKING................
function sqlAddBooking(book_desk:Number,book_site:Number,booking_datefrom:Date,booking_dateto:Date, booking_userid:Number)
{let post = { booking_desk:book_desk ,booking_site:book_site, booking_datefrom:'2022-10-19', booking_dateto:'2022-10-20',booking_userid:3 };
let sql = "INSERT INTO desk_bookings SET ?";
connection.query(sql, post, (err: any) => {

  if (err) {

    throw err;

  };
})}


/* let post = { booking_desk:12 ,booking_site:12, booking_datefrom:'2022-10-19', booking_dateto:'2022-10-20',booking_userid:3 };
let sql = "INSERT INTO desk_bookings SET ?";

let query = connection.query(sql, post, (err: any) => {

  if (err) {

    throw err;

  };
})
 */






//app.listen(8000, () => console.log('Listening for queries on port 8000')); 

//Insert employee 1

app.get("users", (req, res) => {

  let post = { name: "Jake Smith", email: "js@gmail.com" };

  let sql = "INSERT INTO users SET ?";

  let query = connection.query(sql, post, (err: any) => {

    if (err) {

      throw err;

    }

    res.send("desk booked");

  });

});

connection.end();















/*const {createPool} = require('mysql')

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  connectionLimit: 10
})

pool.query(`select * from users`, (err:any, res:any)=>{
    return console.log(res)
})*/