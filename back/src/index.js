const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 9000;
const app = express();

const donutsRouter = require("./router/donutsRouter")

//Conexion a MONGO:
const url_mongo= "mongodb+srv://andermunozrivas:ZzTPvpQuQHQHC8BO@cluster0.4tf9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url_mongo);
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