//Backend for server. Running API
import express from "express";
const app = express();

let useSQL = false;
if (useSQL) {
    var db = require("./backElements/mysql");
    db.connector();
    //db.getAllDesks("Gloucester");
}
else {
    var db = require("./backElements/mongoDB");
    db.connecter();
    //db.book("Gloucester", 10,"Edward", "22/03/2022", "25/03/2022");
    //db.bookings();
    //db.userCheck("edward.l.jones@raytheon.co.uk");
}


//app.get('api/', (req,res) =>  { res.status(200).send("succcess")});
//app.get('api/:id', (req,res) => { res.status(200).send(req.query.id)});
//app.post('api/', (req,res) => {req.send(req.params)});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//Check Username against list

//Import custom Module
const authe = require("./backElements/auth");
//Function to call
function authentication(userID: String) {
    if (authe.checkUser(userID, db)) {
        return authe.checkUser(userID);
    }
    else {
        return null
    }
};
//When requset to '/api/user/' received run authentication
app.get('/api/user/:id', (req, res) => {
    const user = authentication(req.params.id);
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send("User Not found");
    }
});

app.post('/api/user/', (req, res) => {
    const user = authentication(req.body.id);

    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send("User Not found");
    }

});

//Get Seats Given Site
const getDesks = require("./backElements/getseats");

function getSiteDesks(site: string) {
    return getDesks.getSeats(site,db);
};

app.get('/api/desks/:site', async (req, res) => {
    const siteinfo = await db.getAllDesks(req.params.site);
    //getSiteDesks(req.params.site);
 
    if (siteinfo) {
        res.send(siteinfo);
    }
    else {
        res.status(404).send("Site Not found");
    }
});

//Check for booked seat for a given period
const getDeskBookings = require("./backElements/getDeskBookings");

function getBookedDesk(site: string, seatNum: string) {
    return getDeskBookings.getBookingBySeat(site, seatNum);
}
//Get Bookings for a given seat
app.get('/api/book/desks/:site/:seatNum', (req, res) => {
    const seatInfo = getBookedDesk(req.params.site, req.params.seatNum);
    if (seatInfo) {
        res.send(seatInfo);
    } else {
        res.status(404).send('Site Not found')
    }
});

function getBookedDate(site: string, seatNum: string, datefr: string) {
    return getDeskBookings.getBookingByDate(site, seatNum, datefr);
}
//Get Bookings for a given seat and date
app.get('/api/book/desks/:site/:seatNum/:date', (req, res) => {
    const seatInfo = getBookedDate(req.params.site, req.params.seatNum, req.params.date);
    if (seatInfo) {
        res.send(seatInfo);
    } else {
        res.status(404).send('Site Not found')
    }
});

//Book Seat for given period
const makeBooking = require("./backElements/makeBooking");
//
app.post('/api/desks/book/', (req, res) => {
    const confirm = makeBooking.bookDesk(req.body,db);

    if (confirm) {
        res.send(confirm);
    }
    else {
        res.status(501).send("booking has failed")
    }
});

//temporary site get to show bookings will be deleted after persistence is done
app.get("/api/temp/", async (req, res) => {
    res.send(await makeBooking.bookingsCreated(db));

});

//get users bookings
app.get("/api/book/user/:id", (req, res) => {

});


//Get seat details
app.get('/api/desks/:site/:seat', (req, res) => {
    const seatinfo = getDesks.getseatDetails(req.params.site, req.params.seat);
    if (seatinfo) {
        res.send(seatinfo);
    }
    else {
        res.status(404).send("Seat Not found");
    }
});




const path = require("path");
app.use(express.static(__dirname + '/../build'))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../build/index.html"));
});

//Listens for request, Should be last to run, Keeps application running 
app.listen(8000, () => console.log('Listening for queries on port 8000')); 