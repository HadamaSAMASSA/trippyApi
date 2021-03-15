const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    poeple: Number,
    price: Number,
    isBathroom: Boolean,
});

const roomModel = mongoose.model("rooms", roomSchema);
module.exports = roomModel;