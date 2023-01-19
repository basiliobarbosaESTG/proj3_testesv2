import express from 'express'

import {getLogins, getLogin, createLogin} from "./database.js"

const app = express()
app.use(express.json()) //usado para o body do pedido para criar um novo login

//ENDPOINTS
//usado para buscar a lista de Logins através da API Thunder usando um GET
app.get("/logins", async (req, res)=> {
    const logins = await getLogins()
    res.send(logins)
    //res.send("This should be the logins")
})

app.get("/logins/:id", async (req, res)=> {
    const id = req.params.id
    const login = await getLogin(id)
    res.send(login)
})

//usado para criar um novo login através de um pedido http
app.post("/logins", async(req, res)=> {
    const {idUtilizador, username, password} = req.body
    const login = await createLogin(idUtilizador, username, password)
    res.status(201).send(login)
})

app.use((err, req, res, nest) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})