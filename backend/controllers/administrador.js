const administradorService = require("../services/administrador")

let administradorController = {
    getAllAlunos: async function (req, res) {
        try {
            return res.status(200).json(await administradorService.getAllAlunos())
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = administradorController