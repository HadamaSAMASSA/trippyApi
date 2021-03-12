const mongoose = require("mongoose");
const express = require("express");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant")
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`)
})

mongoose.connect("mongodb://localhost:27017/trippy_basics", {useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("DB connected");
    })

app.get('/restaurants', async (req, res) => {
    const restaurant = await restaurantModel.find().lean().exec()
    res.json(restaurant)
});

app.get('/restaurants/:id', async (req, res) => {
    const restaurantId = await restaurantModel.find({
        _id: req.params.id
    }).lean().exec()
    res.json(restaurantId)
})

app.post('/restaurants', async (req, res) => {
    await restaurantModel.create({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        stars: req.body.stars,
        cuisine: req.body.cuisine,
        priceCategory: req.body.category
    })
res.send("Restaurant ajouté avec succès")
});

app.put("restaurants/:id", async(req, res) => {
    const restaurant = await restaurantModel.findOne({
        _id: req.query.id
    })
    .updateOne({
        name: req.body.newName
    }, restaurant)//<-- XAVIER, pourquoi c pas dans l'objet ?
    res.send(`Le nom du restaurant N°${req.params.id} a bien été changé en ${req.body.newName}`)
});

app.delete("restaurants/:id", async(req, res) => {
    const restaurant = await restaurantModel.deleteOne({
        _id: req.params.id
    }, restaurant)
    res.send(`Restaurant N°${req.params.id} supprimé avec succès`)
});
