const sitemap = {
  "Gloucester": [{
    "seatNum": 10,
    "Restrictions": ""

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


function getSeats(site: string) {

  console.log(site);
  const stuff = sitemap;

  if (site === "Gloucester") { const siteinfo = stuff.Gloucester; return siteinfo; }
  else if (site === "Manchester") { const siteinfo = stuff.Manchester; return siteinfo; }
  else { const siteinfo = null; return siteinfo; }
};


module.exports.getSeats = getSeats;