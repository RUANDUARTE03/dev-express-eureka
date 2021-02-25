const express = require("express")
const routes = express.Router()

routes.get("/", (req, res) => {
  res.send("Iniciando projeto")
})

module.exports = routes