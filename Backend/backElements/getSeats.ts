const sitemap = {
  "Gloucester": [{
    "seatNum": 10,
    "Restrictions": "PROJKT"

  },

  {
    "seatNum": 11,
    "Restrictions": ""

  }, {
    "seatNum": 13,
    "Restrictions": ""

  },
  {
    "seatNum": 15,
    "Restrictions": "PROJX"

  }

  ],
  "Manchester": [{
    "seatNum": 10,
    "Restrictions": "PROJY",
    "booked": true
  },

  {
    "seatNum": 13,
    "Restrictions": "BROKEN",
    "booked": false
  }, {
    "seatNum": 14,
    "Restrictions": "",
    "booked": true
  },
  {
    "seatNum": 15,
    "Restrictions": "",
    "booked": true
  },
  {
    "seatNum": 20,
    "Restrictions": "",
    "booked": false
  }


  ]

};



async function getSeats(site: string, db : any) {

  //console.log(site);
  //const stuff = 
  return db.getAllDesks(site)
  //.then((value : any) => {console.log(db.getAllDesks);return value;});
  //console.log(db.getAllDesks(site));
//return stuff ;

/* 
  if (site === "Gloucester") { const siteinfo = stuff.Gloucester; return siteinfo; }
  else if (site === "Manchester") { const siteinfo = stuff.Manchester; return siteinfo; }
  else { const siteinfo = null; return siteinfo; } */
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