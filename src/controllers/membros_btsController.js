var membros_btsModel = require("../models/membros_btsModel");

function buscarMembrosPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  membros_btsModel.buscarMembrosPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os membros: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarVotosMembros() {
  return membros_btsModel.buscarVotosMembros()
      .then((resultado) => {
          return resultado;
      })
      .catch((erro) => {
          console.error(erro);
          throw erro.sqlMessage;
      });
}

function enviarFavorito(req, res) {
  var idUsuario = req.body.usuarioServer;
  var membros = [
      req.body.membro1Server,
      req.body.membro2Server,
      req.body.membro3Server,
      req.body.membro4Server,
      req.body.membro5Server,
      req.body.membro6Server,
      req.body.membro7Server
  ];

  if (idUsuario == undefined || membros.some(membro => membro == undefined)) {
      res.status(400).send("Um ou mais membros estão undefined!");
      return;
  }

  membros_btsModel.enviarFavorito(idUsuario, membros).then(
      function (resultado) {
          res.status(200).json(resultado);
      }).catch(function (erro) {
          res.status(500).json(erro.sqlMessage);
      })
}

function verFavorito(req, res) {
  membros_btsModel.verFavorito().then(function (resultado) {
      res.status(200).json(resultado);
  }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nome;

  if (nome == undefined) {
      res.status(400).send("nome está undefined!");
  } else {
      membros_btsModel.cadastrar(nome)
          .then((resultado) => {
              res.status(201).json(resultado);
          })
          .catch((erro) => {
              console.log(erro);
              console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          });
  }
}

module.exports = {
  buscarMembrosPorUsuario,
  buscarVotosMembros,
  enviarFavorito,
  verFavorito,
  cadastrar
}
