const express = require("express");
const router = express.Router();
const addNewTemple = require("../controller/addNewTemple");


router.post("/createAddnewTemple", async (req, res) => {
  try {
    const result = await addNewTemple.createAddnewTemple(req);
    res.status(result.status).send(result.message);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
});


module.exports = router;
