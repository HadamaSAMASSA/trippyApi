const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: Number
});

const hotelModel = mongoose.model("hotel", hotelSchema);
module.exports = hotelModel;

