const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
const app = express();
const port = 8000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);

app.get("/hotels", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const result = page * limit;
  const hotel = await hotelModel.find().skip(result).limit(limit).lean().exec();
  res.json(hotel);
});

app.get("/hotels/:id", async (req, res) => {
  const hotelId = await hotelModel
    .find({
      _id: req.params.id,
    })
    .lean()
    .exec();
  res.json(hotelId);
});

app.post("/hotels", async (req, res) => {
  await hotelModel.create({
    name: req.body.name,
    // address: req.body.address,
    // city: req.body.city,
    // country: req.body.country,
    // stars: req.body.stars,
    // hasSpa: req.body.spa,
    // hasPool: req.body.pool,
    // priceCategory: req.body.price,
  });
  res.send("hotel ajouté");
});

app.put("/hotels/:id", async (req, res) => {
  const newName = req.query.newName;

  await hotelModel.updateOne(
    {
      _id: req.params.id,
    },
    {
      name: newName,
    }
  );
  res.send(
    `Le nom de l'hotel ${req.params.id} a bien été changé en ${newName}`
  );
});

app.delete("/hotels/:id", async (req, res) => {
  await hotelModel.deleteOne({
    _id: req.params.id,
  });
  res.send(`Hotel N°${req.params.id} supprimé avec succès`);
});

app.get("/restaurants", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const result = page * limit;
  const restaurant = await restaurantModel.find().skip(result).limit(limit).lean().exec();
  res.json(restaurant);
});

app.get("/restaurants/:id", async (req, res) => {
  const restaurantId = await restaurantModel
    .find({
      _id: req.params.id,
    })
    .lean()
    .exec();
  res.json(restaurantId);
});

app.post("/restaurants", async (req, res) => {
  await restaurantModel.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    stars: req.body.stars,
    cuisine: req.body.cuisine,
    priceCategory: req.body.category,
  });
  res.send("Restaurant ajouté avec succès");
});

app.put("/restaurants/:id", async (req, res) => {
  const newName = req.query.newName;

  await restaurantModel.updateOne(
    {
      _id: req.params.id,
    },
    {
      name: newName,
    }
  );
  res.send(
    `Le nom du restaurant ${req.params.id} a bien été changé en ${newName}`
  );
});

app.delete("/restaurants/:id", async (req, res) => {
  const restaurant = await restaurantModel.deleteOne(
    {
      _id: req.params.id,
    },
    restaurant
  );
  res.send(`Restaurant N°${req.params.id} supprimé avec succès`);
});
