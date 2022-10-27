const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/Index')
const usersRouter = require('./routes/Users')

const app = express()
app.use('/', indexRouter)
app.listen(3000)