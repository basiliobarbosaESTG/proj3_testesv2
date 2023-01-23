const connection = require("../database/database");

let administradorService = {
    getAllAlunos: function () {
        return new Promise((response, reject) => {
            connection.query('select * from alunos', (err, result) => {
                if (err) {
                    return reject(err)
                }
                return response(result)
            })
        })
    },
    getAllUtilizadores: function () {
        return new Promise((response, reject) => {
            connection.query('select * from professores', (err, result) => {
                if (err) {
                    return reject(err)
                }
                return response(result)
            })
        })
    }
}

module.exports = administradorService