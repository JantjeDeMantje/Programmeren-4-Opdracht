const { version } = require('chai')
const express = require('express')
const userRoutes = require('./routes/user.routes')
// const logger = require('../util/logger')

const app = express()

const port = process.env.PORT || 3000

// express.json zorgt dat we de body van een request kunnen lezen
app.use(express.json())

app.get('/api/info', (req, res) => {
    console.log('GET /api/info called')
    const info = {
        name: 'Node.js API',
        version: '0.1.0',
        description: 'NodeJS API'
    }
    res.send(info)
})

app.use(userRoutes);

app.use((req, res) => {
    res.status(404).send('Not found')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

module.exports = app
