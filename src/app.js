const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()

// MongoDB Connection
mongoose.connect(config.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
mongoose.connection.on('error', e => console.error(e))

require('./model/Todo')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const todoRouter = require('./routes/todo')

app.use('/todo_items', todoRouter)

module.exports = app