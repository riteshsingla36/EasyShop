const router = require("express").Router();
const AddressController = require('../controllers/address.controller');

router.get("/", AddressController.getAddresses);

router.get("/:id", AddressController.getAddressById);

router.post("/create", AddressController.createAddress);

router.patch("/update/:id", AddressController.updateAddress);

router.delete("/delete/:id", AddressController.deleteAddress);

module.exports = router;