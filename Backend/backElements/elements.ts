var fs = require('fs');
var obj;

fs.readFile('bookings.json', 'utf8', function (err: any, data: string) {
  if (err) throw err;
  obj = JSON.parse(data);
});

fs.readFile('seats.json', 'utf8', function (err: any, data: string) {
  if (err) throw err;
  obj = JSON.parse(data);
});

fs.readFile('users.json', 'utf8', function (err: any, data: string) {
  if (err) throw err;
  obj = JSON.parse(data);
});