const express = require("express")
const routes = express.Router()

const ViaCepController = require("../controllers/viaCep.controller")

routes.get("/viacep/:cep", ViaCepController.index)

module.exports = routes