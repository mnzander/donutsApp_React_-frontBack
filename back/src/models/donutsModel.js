const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donutsSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    },
    sabor: {
        type: String,
        required: true,
    }
});

const Donuts = mongoose.model("Donuts", donutsSchema, "donuts");
module.exports = Donuts;