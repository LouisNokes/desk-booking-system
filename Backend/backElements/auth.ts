
const usersnf = 
    {
        "users":[{
           "usrID" : 1577,
           "name" : "Edward Jones",
           "email" : "edward.l.jones@raytheon.co.uk"
         
         },
       
       {
           "usrID" : 2892,
           "name" : "Samuel lightfoot",
           "email" : "Samuel.lightfoot@raytheon.co.uk"
         
         }]
       
       };


function checkUser(userID : string){
    const arr = usersnf.users;
    const person = arr.find(usr => {return usr.usrID === parseInt(userID)} );
    return(person);


};

module.exports.checkUser = checkUser;