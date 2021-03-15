const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    seat: Number,
    isVIP : Boolean,
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;