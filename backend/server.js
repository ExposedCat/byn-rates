import express from 'express'
import { apiCall } from './api.js'
import { config } from './config.js'
import { resolvePath as path } from './utils.js'

const app = express()

app.use(express.static(path('../public')))

app.get('/', (request, response) => {
    response.sendFile(path('../public/index.html'))
})

app.get('/localapi/currencies', async (request, response) => {
    const currencies = await apiCall('rates', request.query)
    response.send(currencies)
})

app.listen(config.port, error => {
    if (error) {
        console.error(`Can't start server:`)
        console.error(error)
    }

    console.log(`Server is running on ${config.port}`)
})