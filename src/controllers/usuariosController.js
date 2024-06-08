var usuariosModel = require("../models/usuariosModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuariosModel.autenticar(email, senha)
      .then(function (resultado) {
        if (resultado.length == 1) {
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  var nomeUsuario = req.body.usuarioServer;
  // var nomeCompleto = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var membro = req.body.membroServer;

  // if (nomeCompleto == undefined) {
  //   res.status(400).send("Seu nome completo está undefined!");
  // } else if 
  
  if (nomeUsuario == undefined) {
    res.status(400).send("Seu nome de usuário está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (membro == undefined) {
    res.status(400).send("Seu membro favorito está undefined!");
  } else {

    usuariosModel.cadastrar(nomeUsuario, email, senha, membro)
      .then(
        function (resultado) {
        res.json(resultado);
      }
    ).catch(
        function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ", 
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
  }
}

function buscarMembroFavorito(req, res) {
  var idUsuario = req.params.idUsuario;

  usuariosModel.buscarMembroFavorito(idUsuario)
      .then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado[0]);
          } else {
              res.status(204).send([]);
          }
      })
      .catch(function (erro) {
          console.log(erro);
          console.log("\nHouve um erro ao buscar o membro favorito! Erro: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

function verFavoritos(req, res) {
  usuariosModel.verFavoritos()
      .then(function (resultado) {
          res.status(200).json(resultado);
      })
      .catch(function (erro) {
          console.log(erro);
          console.log("\nHouve um erro ao buscar os membros favoritos! Erro: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

module.exports = {
  autenticar,
  cadastrar,
  buscarMembroFavorito,
  verFavoritos
};

