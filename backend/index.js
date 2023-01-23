const express = require("express");
const rota = require("./routes/rota")
const app = express()

app.use(rota)

app.listen(3500, (first) => { console.log("A funfar") });