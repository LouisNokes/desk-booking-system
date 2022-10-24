

function sqlconnecter(){


    console.log("Connected to SQL");
    return "connection"
};

function sqldesks(site : string){


    console.log("Connected");
    return "[{},{},{}]"
};







module.exports.connecter = sqlconnecter;
module.exports.desks = sqldesks;