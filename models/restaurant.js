const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: Number,
    cuisine: String,
    priceCategory: Number
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;