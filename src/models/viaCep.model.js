const connection = require("../database/connection")

module.exports = {
  async insert(address) {
    await connection("address").insert({
      cep: address.cep,
      logradouro: address.logradouro,
      complemento: address.complemento ? address.complemento : null,
      bairro: address.bairro,
      localidade: address.localidade,
      uf: address.uf,
      ibge: address.ibge,
      gia: address.gia ? address.gia : null,
      ddd: address.ddd,
      siafi: address.siafi
    })
  }
}