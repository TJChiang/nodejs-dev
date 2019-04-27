const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.status(404).send({
        error: "Page not found.",
        name: "Todo App v1.0"
    });
});

//  GET /users
//  Give users a name pro and age prop
app.get("/users", (req, res) => {
    res.status(200).send([{
        name: "TJChiang",
        age: 24
    }, {
        name: "Jay",
        age: 24
    }, {
        name: "Lin",
        age: 24
    }]);
});

app.listen(3000);
module.exports.app = app;