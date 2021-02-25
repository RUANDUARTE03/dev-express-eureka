const connection = require("../database/connection")

module.exports = {
  async insert(address) {
    const cepReplace = address.cep.replace(/\D/gim, '')
    await connection("address").insert({
      cep: cepReplace,
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