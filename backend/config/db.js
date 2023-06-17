const mongoose = require("mongoose");

const connectDB = (next) => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("DB connected".blue);
            next()
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
