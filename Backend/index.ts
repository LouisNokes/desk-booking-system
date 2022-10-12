//Backend for server. Running API
import express from "express";
const app = express();

//app.get('api/', (req,res) => { res.status(200).send("succcess")});
//app.get('api/:id', (req,res) => { res.status(200).send(req.query.id)});
//app.post('api/', (req,res) => {req.send(req.params)});

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Check Username against list

//Import custom Module
const authe = require("./backElements/auth");
//Function to call
function authentication(userID : String ){

if(authe.checkUser(userID)){
    return authe.checkUser(userID);
}
else{
    return null
}
};
//When requset to '/api/user/' received run authentication
app.get('/api/user/:id', (req,res) => {
    const user = authentication(req.params.id);

    if(user){
        res.send(user);
    }
    else{
        res.status(404).send("User Not found");
    }
    
});
app.post('/api/user/', (req,res) => {
    const user = authentication(req.body.id);

    if(user){
        res.send(user);
    }
    else{
        res.status(404).send("User Not found");
    }
    
});

//Get Seats Given Site
const getDesks = require("./backElements/getseats")

function getSiteDesks(site : string){
    return getDesks.getSeats(site);
};

app.get('/api/desks/:site', (req,res) => {
    const siteinfo = getSiteDesks(req.params.site);

    if(siteinfo){
        res.send(siteinfo);
    }
    else{
        res.status(404).send("Site Not found");
    }
});

//Get Bookings for a given seat


//Check for booked seat for a given period

//Book Seat for given period



//Get seat details








//Listens for request, Should be last to run, Keeps application running 
app.listen(8000, () => console.log('Listening for queries on port 8000')); 