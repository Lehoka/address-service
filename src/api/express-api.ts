import express from 'express'
import { json } from 'body-parser'
import { errorMiddleware } from './express/error-middleware'
import { addressRouter } from './express/address'

const server: express.Application = express()

server.set('json replacer', (_key: any, value: any) => typeof value === 'undefined' ? null : value)

server.use(json())

server.use('/addresses', addressRouter)

server.get('/', (_, res) => {
    res.send(`It's working, it's working! - Anakin Skywalker`)
})

server.use(errorMiddleware)

export default server