const mongoose = require("mongoose");
const express = require("express");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant")
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`)
})

app.get('/hotels', async (req, res) => {
    
})

mongoose.connect("mongodb://localhost:27017/trippy_basics", {useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("DB connected");
});