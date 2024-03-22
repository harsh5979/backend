const mongoose = require('mongoose');
const Url = process.env.mongodb_Url;



const connectmongodb = async () => {
    try {
        await mongoose.connect(Url);
        console.log("database is connected....")

    } catch (error) {
        console.log("database is not connected")

    }
}

module.exports =  connectmongodb ;