

function Mongoconnecter(){


    console.log("Connected to mongo");
    return "connection"
};

function Mongodesks(site : string){


    console.log("Connected");
    return "[{},{},{}]"
};







module.exports.connecter = Mongoconnecter;
module.exports.desks = Mongodesks;