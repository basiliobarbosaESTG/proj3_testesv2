const connection = require("../database/database");

const administradorService = {
    getAllAlunos: function () {
        return new Promise((response, reject) => {
            connection.query('select * from alunos', (err, result) => {
                if (err) {
                    return reject(err)
                }
                return response(result)
            })
        })
    }
}

module.exports = administradorService