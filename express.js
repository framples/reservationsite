// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table reserver list (DATA) 
var Tables = [
  {
    name: "Ronald Reagan",
    phone: "666-666-6666",
    email: "reagan@whitehouse.com",
    UID: 1382
  },
  {
    name: "Ricardo Milos",
    phone: "326-246-4355",
    email: "ricardomilos@gmail.com",
    UID: 3804
  }
];
var WaitList = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "homePage.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//function(req, res){} === (req, res) => {}

app.get("/reservations", (req, res) => {
  res.sendFile(path.join(__dirname, "reservation.html"));
});


app.get("/api/tables", (req, res) => {
  return res.json(Tables);
});

app.get("/api/waitlist", (req, res) => {
  return res.json(WaitList);
});

app.post("/api/addedtable", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

  //If table is less than 5, it will add to the regular table list
  if (Tables.length < 5) {
    var newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    Tables.push(newTable);

    res.json(newTable);
  } else {
    //Otherwise we're adding it to our WaitList array. 
      var newWaitList = req.body;
      newWaitList.routeName = newWaitList.name.replace(/\s+/g, "").toLowerCase();
      console.log(newWaitList);
      WaitList.push(newWaitList);
      res.json(newWaitList);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});