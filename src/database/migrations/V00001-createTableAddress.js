exports.up = function(knex) {
  return knex.schema.createTable('address', function (table) {
      table.increments('id').primary();
      table.string('cep').notNullable();
      table.string('logradouro').notNullable();
      table.string('complemento');
      table.string('bairro').notNullable();
      table.string('localidade').notNullable();
      table.string('uf').notNullable();
      table.string('ibge').notNullable();
      table.string('gia');
      table.string('ddd').notNullable();
      table.string('siafi').notNullable();
  })
};

exports.down = function(knex) {
   return knex.schema.dropTable('address');
};