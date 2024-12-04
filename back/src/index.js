const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 9000;
const app = express();

const donutsRouter = require("./router/donutsRouter")

//Conexion a MONGO:
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection

db.on("error", (error) => {
    console.log(`Error al conectar con Mongo ${error}`)
});

db.on("connected", () => {
    console.log("Success connection");
});
  
db.on("disconnected", () => {
    console.log("Mongo is disconnected");
});

app.use(express.json());
app.use(cors());
app.use("/donuts", donutsRouter); //Creamos el endpoint para el donutsRouter

//Mandamos un mensaje cuando levantemos el servidor
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`)
});