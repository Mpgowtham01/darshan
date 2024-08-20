const express = require("express");
const dbConfig = require("../database/config");
const router = express.Router();

const touristlist = require("../controller/TouristList.controller");

router.post("/create", async (req, res) => {
  try {
    let result = await touristlist.create(req);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getall", async (req, res) => {
  try {
    let result = await touristlist.getAll(req);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    let result = await touristlist.delete(req);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    let result = await touristlist.update(req);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
