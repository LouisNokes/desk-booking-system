const sitemap = {
    "Gloucester":[{
       "seatNum" : 10,
       "Restrictions" : ""
     
     },
   
     {
        "seatNum" : 11,
        "Restrictions" : ""
      
      },{
        "seatNum" : 13,
        "Restrictions" : ""
      
      },
      {
        "seatNum" : 15,
        "Restrictions" : "PROJX"
      
      }

    ],
    "Manchester":[{
        "seatNum" : 10,
        "Restrictions" : "PROJY"
      
      },
    
      {
         "seatNum" : 13,
         "Restrictions" : "BROKEN"
       
       },{
         "seatNum" : 14,
         "Restrictions" : ""
       
       },
       {
         "seatNum" : 15,
         "Restrictions" : ""
       
       },
       {
         "seatNum" : 20,
         "Restrictions" : ""
       
       }
     
     
     ]
   
   };


function getSeats(site : string){

    console.log(site);
    const stuff = sitemap;

    if(site === "Gloucester"){const siteinfo = stuff.Gloucester;return siteinfo;}
    else if(site === "Manchester"){const siteinfo = stuff.Manchester;return siteinfo;}
    else {const siteinfo = null;return siteinfo;}
    
    
};

function getseatDetails(site : string, seatNo:string ){

  console.log(site);
  const stuff = sitemap;

  if(site === "Gloucester"){const siteinfo = stuff.Gloucester; 
    const seat = siteinfo.find(item => {console.log(item);return item.seatNum === parseInt(seatNo)});
    //console.log(seat);
    return seat}

  else if(site === "Manchester"){const siteinfo = stuff.Manchester;
    const seat = siteinfo.find(item => {return item.seatNum === parseInt(seatNo)});return seat}
  else {const siteinfo = null;return siteinfo;}
};

module.exports.getseatDetails = getseatDetails;
module.exports.getSeats = getSeats;