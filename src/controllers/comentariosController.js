var comentariosModel = require("../models/comentariosModel");

function listar(req, res) {
  comentariosModel.listar().then(function (resultado) {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).send("Nenhum resultado encontrado!");
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os comentários: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function listarPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  comentariosModel.listarPorUsuario(idUsuario)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os comentários: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function pesquisarDescricao(req, res) {
  var descricao = req.params.descricao;

  comentariosModel.pesquisarDescricao(descricao)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os comentários: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function publicar(req, res) {
  var comentario = req.body.comentario;
  var nota = req.body.nota;
  var idUsuario = req.body.idUsuario;
  var idMusica = req.body.idMusica;

  if (comentario == undefined) {
    res.status(400).send("O comentário está indefinido!");
  } else if (nota == undefined) {
    res.status(400).send("A nota está indefinida!");
  } else if (idUsuario == undefined) {
    res.status(403).send("O id do usuário está indefinido!");
  } else {
    comentariosModel.publicar(comentario, nota, idUsuario, idMusica)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function editar(req, res) {
  var novaDescricao = req.body.descricao;
  var idComentario = req.params.idComentario;

  comentariosModel.editar(novaDescricao, idComentario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function deletar(req, res) {
  var idComentario = req.params.idComentario;

  comentariosModel.deletar(idComentario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listar,
  listarPorUsuario,
  pesquisarDescricao,
  publicar,
  editar,
  deletar
}
