var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'desk_savers'
});

connection.connect();

connection.query('SELECT * FROM users', (err:any, res : any)=>{
    return console.log(res)
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