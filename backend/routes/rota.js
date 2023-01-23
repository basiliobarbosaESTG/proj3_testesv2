const express = require("express");
const administradorController = require('../controllers/administrador')

const rota = express.Router()

rota.get("/getallalunos", administradorController.getAllAlunos)

module.exports = rota