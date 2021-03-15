const mongoose = require("mongoose");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
const roomModel = require("./models/room");


mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);

const createRestaurant = async () => {
  try {
    await restaurantModel.deleteMany({}).exec();
    restaurantModel.create(
      {
        name: "Le Bijou de Cacao",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Rose Japonaise",
        address: "45 rue de la reunion",
        city: "Paris",
        country: "France",
        stars: 1,
        cuisine: "Pizzeria",
        priceCategory: 2,
      },
      {
        name: "La Fenêtre de l'Enigme",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Fleur Acide",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Route Solaire",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Galerie",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "L'Ivoire",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Base",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Lumière des Etoiles",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      },
      {
        name: "La Cime",
        address: "15 rue de la reunion",
        city: "Las vegas",
        country: "USA",
        stars: 3,
        cuisine: "Pizzeria",
        priceCategory: 3,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const createHotel = async () => {
  try {
    await hotelModel.deleteMany({}).exec();
    hotelModel.create(
      {
        name: "Le Creuset",
        address: "3 rue du 14 juillet",
        city: "Paris",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "La Chandelle",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "Le Trésor",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "La Cannelle",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "Fleurs",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "Le Bijou de Safran",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "L'ange Incroyable",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "Le Frigo Rare",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "La Vallée Bengale",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: "La Capture de Bronze",
        address: "60 rue du 14 juillet",
        city: "Juvisy",
        country: "France",
        stars: 2,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const createRoom = async () => {
    try {
      await roomModel.deleteMany({}).exec();
      roomModel.create(
        {
            people: 2,
            price: 69,
            isBathroom: true,
        },
        {
            people: 4,
            price: 100,
            isBathroom: true
        }
        );
    } catch (error) {
      console.log(error);
    }
};

createRestaurant();
createHotel();
createRoom();