//s is for app State;
var s = {
  slides: [
    {
      img: "principles.png",
      title: "Principles of Engagement",
      body: "Duis aute irure dolor in reprehenderit in quisvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      img: "vision.png",
      title: "Our Vision",
      body: "Duis aute irure dolor in reprehenderit in quisvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      img: "mission.png",
      title: "Our Mission",
      body: "Duis aute irure dolor in reprehenderit in quisvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
  ],
  team: [
    {
      name: "Bob Jackson",
      img: "https://api.adorable.io/avatars/340/bob.png"
    },
    {
      name: "Janis Peterson",
      img: "https://api.adorable.io/avatars/340/bo3b.png"
    },
    {
      name: "Sampleblatherman LongestLongNameEver",
      img: "https://api.adorable.io/avatars/340/samle.png"
    },
    {
      name: "Bobby MiddleName Jordan",
      img: "https://api.adorable.io/avatars/340/basdob.png"
    },
    {
      name: "Middle B. Initial",
      img: "https://api.adorable.io/avatars/340/bfsob.png"
    },
    {
      name: "Qbert Pacman",
      img: "https://api.adorable.io/avatars/340/bfdaob.png"
    },
    {
      name: "Cheddar Jack",
      img: "https://api.adorable.io/avatars/340/by54ob.png"
    },
    {
      name: "Mario Brother",
      img: "https://api.adorable.io/avatars/340/boburyt.png"
    },
    {
      name: "Señor Frog",
      img: "https://api.adorable.io/avatars/340/b3542ob.png"
    },
    {
      name: "Ortuga P'Dandy-Brine",
      img: "https://api.adorable.io/avatars/340/b354ff2ob.png"
    },
    {
      name: "Slash",
      img: "https://api.adorable.io/avatars/340/b354ff2oaab.png"
    }
  ],

  directorySearchResults: [
    {
      name: "Cheddar Jack",
      title:"Chief Dairy Officer",
      img: "https://api.adorable.io/avatars/340/by5bba4ob.png",
      url:"http://www.google.com"
    },
    {
      name: "Mario Brother",
      title: "Senior Plumbing Official",
      img: "https://api.adorable.io/avatars/340/boburyt.png",
      url:"http://www.google.com"
    },
    {
      name: "Señor Frog",
      title: "Master of Ceremonies",
      img: "https://api.adorable.io/avatars/340/b3542ob.png",
      url:"http://www.google.com"
    },
    {
      name: "Ortuga P'Dandy-Brine",
      title: "Envelope Licker",
      img: "https://api.adorable.io/avatars/340/b354ff2ob.png",
      url:"http://www.google.com"
    },
    {
      name: "Slash",
      title: "Master Guitarist",
      img: "https://api.adorable.io/avatars/340/b354ff2oaab.png",
      url:"http://www.google.com"
    }
  ],


  news:[
    {
      date: "May 7, 2017",
      title: "Win! Read about our successful win",
      tags: ["Customer Win"],
      url: "http://www.google.com"
    },
    {
      date: "March 17, 2017",
      title: "Here is some Great NFSOP News!",
      tags: ["News"],
      url: "http://www.google.com"
    },
    {
      date: "February 5, 2017",
      title: "John Davis Wins Participation Trophy",
      tags: ["Recognition"],
      url: "http://www.google.com"
    },
    {
      date: "February 2, 2017",
      title: "A New Thing Happened in February",
      tags: false,
      url: "http://www.google.com"
    }
  ],
  events:[
    {
      date: "May 25, 2017",
      title: "Annual Awareness Gala",
      url: "http://www.google.com"
    },
    {
      date: "July 4, 2017",
      title: "Independence Day Party",
      url: "http://www.google.com"
    },
    {
      date: "August 15, 2017",
      title: "John Davis Participation Trophy Ceremony",
      url: "http://www.google.com"
    },
    {
      date: "January 1, 2018",
      title: "A Very Happy New Year",
      url: "http://www.google.com"
    }
  ],
  sidebarTabs:[
    {
      name:"News",
      template:'news',
      selected: true
    },
    {
      name:"Events",
      template:'events',
      selected: false
    }
  ],
  filters: {
    "Programs" : {
      open: true,
      maxHeight: "300px",
      currentHeight: "300px",
      items: {
        "Cheeseburgers" : {active: false},
        "Fries" : {active: false},
        "Onion Rings" : {active: false},
        "Ketchup" : {active: false},
        "Mustard" : {active: false}
      }
    },
    "Beverages" : {
      open: false,
      maxHeight: "300px",
      currentHeight: "25px",
      items: {
        "Coca-Cola" : {active: false},
        "Diet Coke" : {active: false},
        "Sprite" : {active: false},
        "Fanta" : {active: false},
        "Dasani" : {active: false}
      }
    },
    "Partners" : {
      open: false,
      maxHeight: "700px",
      currentHeight: "25px",
      items: {
        "McDonalds" : {active: false},
        "Burger King" : {active: false},
        "Kroger" : {active: false},
        "Publix" : {active: false},
        "Walmart" : {active: false},
        "Walmart2" : {active: false},
        "Walmart3" : {active: false},
        "Walmart4" : {active: false},
        "Walmart5" : {active: false},
        "Walmart6" : {active: false},
        "Walmart7" : {active: false},
        "Walmart8" : {active: false},
        "Walmart9" : {active: false},
        "Walmart10" : {active: false},
        "Walmart11" : {active: false},
        "Walmart12" : {active: false},
        "Walmart13" : {active: false},
        "Walmart14" : {active: false},
        "Walmart15" : {active: false},
        "Walmart16" : {active: false},
        "Walmart17" : {active: false},
        "Walmart18" : {active: false}
      }
    }
  },
  footerLinks:[
    {
      name:"Consectetur adipisicing elit",
      url: "http://www.google.com"
    },
    {
      name:"Sed do eiusmod tempor incididunt",
      url: "http://www.google.com"
    },
    {
      name:"Labore et dolore magna aliqua",
      url: "http://www.google.com"
    },
    {
      name:"Enim ad minim",
      url: "http://www.google.com"
    }
  ],
  footerNews:[
    {
      date: "May 7, 2017",
      title: "Win! Read about our successful win",
      tags: ["Customer Win"],
      url: "http://www.google.com"
    },
    {
      date: "March 17, 2017",
      title: "Here is some Great NFSOP News!",
      tags: ["News"],
      url: "http://www.google.com"
    }
  ],
  favorites: [
    "asdf8765g",
    "asd4339bhr5vfg",
    "asdf9874rrdf6g"


  ],
  documents: {
    folderPath: [
      {name: "HQ Marketing",url:"/hq-marketing"},
      {name: "Fanta",url:"/hq-marketing/fanta"},
      {name: "Plan-O-Brand",url:"/hq-marketing/fanta/plan-0-brand"},

    ],
    files: [
      {
        id: "asdfgbg",
        type: "folder",
        name: "Special Files",
        date: "April 2, 2017",
        url: "http://www.google.com"
      },
      {
        id: "asdf5ggtt",
        type: "folder",
        name: "Amazing Files",
        date: "April 20, 2017",
        url: "http://www.google.com"
      },
      {
        id: "asdf234g",
        type: "folder",
        name: "Absurdly Useful Files",
        date: "May 5, 2017",
        url: "http://www.google.com"
      },
      {
        id: "a111su654dfg",
        type: "file",
        name: "Splacky Corbun.pdf",
        date: "May 2, 2017",
        url: "http://www.google.com/1"
      },
      {
        id: "asdf8765g",
        type: "file",
        name: "Snortuga Flancy Port.xlsx",
        date: "May 5, 2017",
        url: "http://www.google.com/2"
      },
      {
        id: "asdf9874rrdf6g",
        type: "file",
        name: "Lorem Ipsum.pdf",
        date: "May 25, 2017",
        url: "http://www.google.com/3"
      },
      {
        id: "asd4339bhr5vfg",
        type: "file",
        name: "Dolor Emit.pdf",
        date: "June 5, 2017",
        url: "http://www.google.com/4"
      },
      {
        id: "asdf7766654g",
        type: "file",
        name: "Coca-Cola.pdf",
        date: "December 23, 2017",
        url: "http://www.google.com/5"
      }


    ]
  },
  dashboard: {
    zones:[
      {
        name: "East",
        value: 22,
        percentValue: "16%"
      },
      {
        name: "Central",
        value: 31,
        percentValue: "24%"
      },
      {
        name: "West",
        value: 66,
        percentValue: "50%"
      },
      {
        name: "NOSR",
        value: 12,
        percentValue: "9%"
      }
    ],
    status: {
      pending:3,
      active:11,
      cancelled:4,
      completed:13
    },
    type: [
      {
        name:"Assets",
        percentValue:"32%"
      },
      {
        name:"Channel",
        percentValue:"57%"
      },
      {
        name:"New Product",
        percentValue:"15%"
      },
      {
        name:"Launch Test",
        percentValue:"80%"
      },
      {
        name:"Pillar",
        percentValue:"21%"
      }
    ],
    finance: {
      requested: {
        count: 18,
        value: "$120K"
      },
      utilized: {
        count: 11,
        value: "$89K"
      },
      approved: {
        count: 16,
        value: "$102K"
      },
      rejected: {
        count: 12,
        value: "$18K"
      }
    }
  }

};
