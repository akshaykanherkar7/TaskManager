const express = require('express');
const cors = require('cors');
require("dotenv").config();

const { connection } = require("./src/Config/config");
const userRoutes = require("./src/Routes/userRoute");
console.log(userRoutes, "user routes")
// const userController = require("./src/Controllers/userController")

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Tried to access Task-Manager Home page." });
})

app.use("/task-manager", userRoutes)


app.listen(process.env.PORT, async () => {
    try{
        await connection;
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Error connecting to MongoDB");
    }
    console.log("Server started on port " + process.env.PORT);
})
