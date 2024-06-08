var express = require("express");
var router = express.Router();

var membros_btsController = require("../controllers/membros_btsController");

// router.get("/:IdMembro", function (req, res) {
//   membros_btsController.buscarMembros(req, res);
// });

router.post("/cadastrar", function (req, res) {
  membros_btsController.cadastrar(req, res);
});

router.get("/buscarMembrosPorUsuario/:idUsuario", function (req, res) {
  membros_btsController.buscarMembrosPorUsuario(req, res);
});

router.post("/enviarFavorito", function(req, res){
  membros_btsController.enviarFavorito(req, res);
});

router.get("/verFavorito", function(req, res){
  membros_btsController.verFavorito(req, res);
});

router.get("/buscarVotosMembros", function(req, res){
  membros_btsController.buscarVotosMembros(req, res);
});

module.exports = router;
