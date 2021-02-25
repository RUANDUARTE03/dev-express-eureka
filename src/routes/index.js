const express = require("express")
const routes = express.Router()

const AddressController = require("../controllers/address.controller")

routes.get("/address/:cep", AddressController.index)

module.exports = routes