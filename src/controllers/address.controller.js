const connection = require("../database/connection")
const _ = require('lodash')
const axios = require("axios")
const model = require("../models/address.model")

module.exports = {
  async index(req, res) {
    const { cep } = req.params

    const data = await connection("address").where("cep", cep).first()

    const dataPresent = _.isEmpty(data)

    if (!dataPresent) {
      res.status(200).json(data)
      console.log('Pesquisou no banco')
    } else {
      console.log('Pesquisou na API')
      const dataCep = []
      await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          dataCep.push(response.data)
        })
        .catch((error) => {
          return res.status(404).json(error)
        })
      const address = dataCep[0]

      model.insert(address)

      res.status(200).json(address)
    }

  }
}