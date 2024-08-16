const express = require("express");
const router = express.Router();

//Importing controller
const pincodeController = require("../controller/pincode.controller");

//Router Create AREA
router.get("/getall", pincodeController.getAll);
router.post("/create", pincodeController.createPincode);
// router.get("/:id", areaController.getOne);
router.put("/update/:id", pincodeController.updatePincode);
router.delete("/delete/:id", pincodeController.deletePincode);
// router.get("/getArea/:id", areaController.getArea);

module.exports = router;
