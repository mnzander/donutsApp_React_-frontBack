const { loadData, getDonuts, getDonutById, deleteDonutById, createDonut, updateDonutById } = require("../controllers/donutsController");

const router = require("express").Router()

// router.get("/loadData", loadData);
router.post("/", createDonut) //C
router.get("/", getDonuts); //R
router.get("/:id", getDonutById); //R
router.put("/:id", updateDonutById) //U
router.delete("/:id", deleteDonutById); //D


module.exports = router