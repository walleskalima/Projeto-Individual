var musicasModel = require("../models/musicasModel");

function buscarPorTitulo(req, res) {
  var titulo = req.query.titulo;

  musicasModel.buscarPorTitulo(titulo).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  musicasModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  musicasModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var titulo = req.body.titulo;
  var album = req.body.album;

  musicasModel.buscarPorTitulo(titulo).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `A música com o título ${titulo} já existe` });
    } else {
      musicasModel.cadastrar(titulo, album).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorTitulo,
  buscarPorId,
  cadastrar,
  listar,
};

