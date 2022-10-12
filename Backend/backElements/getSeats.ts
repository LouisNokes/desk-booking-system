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


module.exports.getSeats = getSeats;