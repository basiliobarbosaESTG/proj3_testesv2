const express = require("express");
const administradorController = require('../controllers/administrador')

const rota = express.Router()

rota.get("/getallalunos", administradorController.getAllAlunos)
rota.get("/getallutilizadores", administradorController.getAllUtilizadores)

module.exports = rota