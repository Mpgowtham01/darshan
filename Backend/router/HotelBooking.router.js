const express = require("express");
const hotelBooking = require("../controller/HotelBooking.controller");
const router = express.Router();

router.post("/bookRoom", async (req, res) => {
  try {
    const result = await hotelBooking.bookHotel(req);
    res.status(result.status).send(result.message);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
});

router.get("/getroombooking", async (req, res) => {
  try {
    let result = await hotelBooking.getHotel();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
