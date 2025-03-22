const express = require('express');
const path=require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
// app.set("views",path.join(__dirname,"/views"));


app.get('/', (req, res) => {
    res.render('home'); // No need for .ejs extension
});
 
app.get('/about',(req,res)=>{
  
    let insertData=require('./data.json');
    console.log("this",insertData);
    

    res.render('about',{insertData});
})

app.listen(port, () => {
    console.log(`Listenin dsg on port ${port}`);
});

