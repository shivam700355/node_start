const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}
`);
})
// app.use((req,res)=>{
//     console.log("request recieved");
//     res.send({
//         name :"shivam  maurya",
//         age:21,
//         city:"sultanpur",
//     });
// })

app.get('/', (req, res) => {
    console.log("request recieved");
    res.send({
        name: "shivam  maurya",
        age: 21,
        city: "sultanpur",
    });
});

app.get('/about/:username/:id', (req, res) => {
    let { username, id } = req.params;
    res.send(`this is About page name : ${username} , ID : ${id}`)
});

app.get('/contact', (req, res) => {
    let { q ,color} = req.query;
    res.send(`<h1>this is Home page  The Query is  ${q} ${color}</h1>`);
});

app.post('/home', (req, res) => {
    let { q } = req.query;
    res.send(`<h1>this is Home page  The Query is  ${q}</h1>`);

});

app.get('/*', (req, res) => {
    res.send('Page not Found 404');
});