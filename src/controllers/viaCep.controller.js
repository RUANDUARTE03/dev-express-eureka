const axios = require("axios")
const model = require("../models/viaCep.model")

module.exports = {
  async index(req, res) {
    const { cep } = req.params
    const data = []

    await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      data.push(response.data)
    })
    .catch((error) => {
      return res.status(404).json(error)
    })

    const address = data[0]

    model.insert(address)

    res.status(200).json(address)
  }
}