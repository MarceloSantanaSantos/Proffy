const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")
const nunjucks = require('nunjucks')

// Config Nunjucks 
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server
// Receber dados do req.body
.use(express.urlencoded({ extended: true }))
// Config Arquivos Estáticos
.use(express.static("public"))
// Rotas da App
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5000)