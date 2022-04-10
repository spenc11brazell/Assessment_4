const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["All the troubles you have will pass away very quickly.", 
           "All will go well with your new project.",
           "All your hard work will soon pay off.",
           "Allow compassion to guide your decisions.",
           "An acquaintance of the past will affect you in the near future.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});


app.get("/api/lucky", (req, res) => {
  const luckys = ["Lucky number 3", 
           "Lucky number 7",
           "Lucky number 11",
           "Lucky number 15",
           "Lucky number 20",
  ];

  // choose random lucky
  let randomIndex = Math.floor(Math.random() * luckys.length);
  let randomLuckys = luckys[randomIndex];

  res.status(200).send(randomLuckys);
  
});


app.get("/api/love", (req, res) => {
  const loves = ["January", 
           "February",
           "March",
           "April",
           "May",
           "June",
           "July",
           "August",
           "September",
           "October",
           "November",
           "December",
  ];

  // choose random love
  let randomIndex = Math.floor(Math.random() * loves.length);
  let randomLoves = loves[randomIndex];

  res.status(200).send(randomLoves);
  
});


app.get("/api/vacation", (req, res) => {
  const vacations = ["Ireland", 
           "Augusta National Golf Tournament",
           "Hawaii",
           "Greece",
           "Cancun",
  ];

  // choose random vacation
  let randomIndex = Math.floor(Math.random() * vacations.length);
  let randomVacations = vacations[randomIndex];

  res.status(200).send(randomVacations);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
