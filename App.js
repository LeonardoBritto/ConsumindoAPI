const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const indexRouter = require('./routes/Index')

app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
})