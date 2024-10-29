const express = require('express')
const bodyParser = require('body-parser')
const {initDatabase} = require('./service/db');
const addRoutes = require('./route');
const app = express()

// parse application/json
app.use(bodyParser.json());


initDatabase((err, {db, todoModel}) => {
    if (err) {
        return console.err(err);
    }

    addRoutes(app, db, todoModel);
    app.listen(6000, function () {
        console.log('Running on :6000');
    });
});
