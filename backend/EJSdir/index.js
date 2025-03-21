const express = require('express');
const path=require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
// app.set("views",path.join(__dirname,"/views"));


app.get('/', (req, res) => {
    res.render('home'); // No need for .ejs extension
});
app.listen(port, () => {
    console.log(`Listenin dsg on port ${port}`);
});
