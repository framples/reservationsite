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
var Tables = []

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


app.get("/api/tables", (req, res) => {
    return res.json(Tables);
});


app.post("/api/addedtable", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
  });