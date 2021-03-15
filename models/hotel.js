const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: Number,
    rooms: [{type: mongoose.Types.ObjectId, ref: "rooms"}]
});

const hotelModel = mongoose.model("hotels", hotelSchema);
module.exports = hotelModel;

