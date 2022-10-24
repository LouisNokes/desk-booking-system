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

//app.listen(8000, () => console.log('Listening for queries on port 8000')); 

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