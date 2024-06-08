var database = require("../database/config");

function buscarPorTitulo(titulo) {
  var instrucaoSql = `SELECT * FROM musicas WHERE titulo = '${titulo}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM musicas`;

  return database.executar(instrucaoSql);
}

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM musicas WHERE id = ${id}`;

  return database.executar(instrucaoSql);
}

function cadastrar(titulo, album) {
  var instrucaoSql = `INSERT INTO musicas (titulo, album) VALUES ('${titulo}', '${album}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorTitulo, buscarPorId, cadastrar, listar };

