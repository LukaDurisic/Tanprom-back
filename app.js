const express = require('express')
const app = express()
const db = require('./models')

app.use('/', async(req,res) => {
    res.send('pozz')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(8000, () => {
    console.log('Server running on port on 8000')
})