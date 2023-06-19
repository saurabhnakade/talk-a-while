const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors=require('colors')
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
app.use(express.json()) //accepting json data

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.use('/api/user',userRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT || 5000, () => {
    connectDB(() => console.log("Server running at port 5000".yellow));
});
