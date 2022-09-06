const router = require("express").Router();
const AddressController = require('../controllers/address.controller');

router.get("/", AddressController.getAddress);

router.get("/:id", AddressController.getAddressById);

router.post("/", AddressController.createAddress);

router.patch("/:id", AddressController.updateAddress);

router.delete("/:id", AddressController.deleteAddress);

module.exports = router;