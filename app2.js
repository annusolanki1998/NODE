const express = require("express");

const app2 = express();
app2.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
});

app2.use('/add-product', (req, res, next) => {
    console.log("In another middleware!");
    res.send("<h1>Good Morning</h1>");
});

app2.use('/', (req, res, next) => {
    console.log("Intoo another middleware!");
    res.send("<h1>Hello from Express!</h1>");
});

app2.listen(4000);
