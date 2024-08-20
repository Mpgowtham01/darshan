const express = require("express");

const router = express.Router();

const godFollowersController = require("../controller/godFollowers.controller");

router.post("/Createfollowers", async (req, res, next) => {
  try {
    let result = await godFollowersController.createGodFollowers(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/getAllFollowers", async (req, res, next) => {
  try {
    let result = await godFollowersController.getAllFollowers(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});
router.put("/editFollowers/:id", async (req, res, next) => {
  try {
    let result = await godFollowersController.updateFollowers(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});
router.delete("/deleteFollowers/:id", async (req, res, next) => {
  try {
    let result = await godFollowersController.deleteFollowers(req);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
