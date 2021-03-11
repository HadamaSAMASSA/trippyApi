const mongoose = require('mongoose')
const hotelModel = require('./models/hotel')
const restaurantModel = require('./models/restaurant')

mongoose.connect("mongodb://localhost:27017/trippy_basics", {useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("DB connected");
});

const createRestaurant = async () => {
    try{
        await restaurantModel.deleteMany({}).exec()
        restaurantModel.create({
            name: "Mirdam's",
            address: "15 rue de la reunion",
            city: 'Las vegas',
            country: "USA",
            stars: 3,
            cuisine: 'Pizzeria',
            priceCategory: 3,
        })
    } catch(error) {
        console.log(error)
    }
}

const createHotel = async () => {
    try{
        await hotelModel.deleteMany({}).exec();
        hotelModel.create({
            name: "Hadam's",
            address: "3 rue du 14 juillet",
            city: "Paris",
            country: "France",
            stars: 2,
            hasSpa: true,
            hasPool: true,
            priceCategory: 2,
        })
    } catch (error) {
        console.log(error)
    }
}

createRestaurant()
createHotel()