import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({ //pool é uma colecao de conexoes da BD
    //vamos usar variaveis de ambiente em vez de codificar os valores(hard-coded) 
    host: process.env.MYSQL_HOST, //variaveis usadas no ficheiro .env que usa a instalacao dotenv
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise() //Async

//const result = await pool.query("SELECT * FROM proj3_app.login")
//const rows = result[0] //vai buscar apenas o primeiro objeto que são os dados do SELECT
//console.log(result) //retorna toda as infos da BD tipos de dados etc
//console.log(rows) //apresenta apenas os dados da BD --> SELECT

//AORESENTA EXATAMENTE O MESMO RESULTADO QUE O CÓDIGO ANTERIOR
//CLEAN CODE - USOU-SE ESTE CÓDIGO PARA UTILIZAR MENOS LINHAS DE CODIGO
export async function getLogins(){
    const [rows] = await pool.query("SELECT * FROM proj3_app.login")
    return rows
}

export async function getLogin(id){
    const [rows] = await pool.query("SELECT * FROM proj3_app.login WHERE idLogin = ?", [id]) //enviamos o idLogin para a variavel em array "id"
    return rows[0]
} 

//const logins = await getLogins()
//console.log(logins)

//const login = await getLogin(1) //obtemos apenas o primeiro elemento, ou seja, procuramos pelo idLogin=1
//console.log(login)

export async function createLogin(idUtilizador, username, password) {
    const [result] = await pool.query("INSERT INTO proj3_app.login (idUtilizador, username, password) VALUES (?,?,?)", [idUtilizador, username, password])
    /*return {idUtilizador: result.insertId,username,password}*/

    const id = result.insertId
    return getLogin(id)
}

//const result = await createLogin(4, 'ze', 'ze')
//console.log(result)

