var express = require("express");
var router = express.Router();

var musicasController = require("../controllers/musicasController");

router.post("/cadastrar", function (req, res) {
  musicasController.cadastrar(req, res);
});

router.get("/buscar/:titulo", function (req, res) {
  musicasController.buscarPorTitulo(req, res);
});

router.get("/buscarId/:id", function (req, res) {
  musicasController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  musicasController.listar(req, res);
});

module.exports = router;
