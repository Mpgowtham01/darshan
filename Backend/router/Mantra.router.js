const express = require("express");

const router = express.Router();

const mantraController = require("../controller/Mantra.controller");
const prasadController = require("../controller/prasad.controller");
const divineVehicle = require("../controller/divineVehicle.controller");

router.post("/createmantra", async (req, res, next) => {
  try {
    let result = await mantraController.createMantra(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getallmantra", async (req, res, next) => {
  try {
    let result = await mantraController.getAllMantra(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

//prasad
router.post("/createprasad", async (req, res, next) => {
  try {
    let result = await prasadController.createPrsad(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getallprasad", async (req, res, next) => {
  try {
    let result = await prasadController.getAllPrasad(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

//divine vehicle
router.post("/createdivinevehicle", async (req, res, next) => {
  try {
    let result = await divineVehicle.createDivineVehicle(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getalldivinevehicle", async (req, res, next) => {
  try {
    let result = await divineVehicle.getAllDivineVehicle(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
