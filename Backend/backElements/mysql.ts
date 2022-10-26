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

//Get all desks for a site
function sqlgetAllDesks(site:String){connection.query('SELECT * FROM desks INNER JOIN sites ON desks.site_idA = sites.site_id WHERE sites.site = "' +site+'"' , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});}

sqlgetAllDesks('Gloucester'

);

//Get all bookings for a given date
function sqlgetAllbookings(site:String,desk:String, dateto:Date,datefrom:Date )
{connection.query('SELECT * FROM desks_bookings WHERE booking_site = "' +site+'" AND ((booking_datefrom >= '+datefrom+' AND booking_datefrom<dateto))'  , (err:any, result : any)=>{
  if (err) throw err;
    return console.log(result)
});}

//sqlgetAllbookings(''

//);




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