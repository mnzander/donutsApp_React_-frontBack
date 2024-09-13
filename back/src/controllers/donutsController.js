const donutsDB = require("../mocks/donutsDB")
const Donuts = require("../models/donutsModel")

//Carga inicial de datos desde el MOCK hasta MONGO
const loadData = async (req, res) => {
    try{
        donutsDB.map(async (donut) => {
            const newDonut = Donuts({
                nombre: donut.nombre,
                precio: donut.precio,
                sabor: donut.sabor,
            });
            await newDonut.save();
        })
        res.sendStatus(200)
    } catch(error) {
        res.status(500).json({ status: "error", data: null, error: error.message })
    }
}

//CREAR DONUT (C)
const createDonut = async (req, res) => {
    try{
        const donutData = req.body;
        const newDonut  = await Donuts({
            nombre: donutData.nombre,
            precio: donutData.precio,
            sabor: donutData.sabor
        });
        await newDonut.save();
        res.status(200).json({ status: "succeded", data: newDonut, error: null });
    } catch(error){
        res.status(500).json({ status: "failed", data: null, error: error.message });
    }
}

//GET ALL DONUTS (R)
const getDonuts = async (req, res) => {
    try{
        const allDonuts = await Donuts.find();
        res.status(200).json({ status: "succeded", data: allDonuts, error: null });

    }catch(error) {
        res.status(500).json({ status: "error", data: null, error: error.message });
    }
}

//GET DONUT BY ID (R)
const getDonutById = async (req, res) => {
    try{
        const id = req.params.id;
        const donut = await Donuts.findById(id);
        res.status(200).json({ status: "succeded", data: donut, error: null });
    }catch(error) {
        res.status(500).json({ status: "error", data: null, error: error.message });
    }
}

//UPDATE DONUT BY ID (U)
const updateDonutById = async (req, res) => {
    try {
        const id = req.params.id;
        const donut = await Donuts.findById(id);

        if (!donut) {
            return res.status(404).json({ status: "failed", message: "El donut no existe" });
        }
        
        const updatedFields = { nombre: req.body.nombre, precio: req.body.precio, sabor: req.body.sabor };
        const updatedDonut = await Donuts.findByIdAndUpdate(id, updatedFields, { new: true });

        if (!updatedDonut) {
            return res.status(500).json({ status: "failed", message: "Error al actualizar el donut" });
        }
        res.status(200).json({ status: "succeded", data: updatedDonut });

    } catch (error) {
        console.error("Error al actualizar el donut:", error);
        res.status(500).json({ status: "failed", message: "Ocurrió un error interno del servidor" });
    }
};

//DELETE DONUT BY ID (D)
const deleteDonutById = async (req, res) => {
    try{
        const id = req.params.id;
        await Donuts.findByIdAndDelete(id);
        res.status(200).json({ status: "succeded", data: null, error: null });
    } catch(error){
        res.status(500).json({ status: "failed", data: null, error: error.message });
    }
}

module.exports = { 
    loadData,
    createDonut,
    getDonuts,
    getDonutById,
    updateDonutById,
    deleteDonutById,
}