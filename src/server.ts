import express, { Application } from 'express'
import cors from 'cors'
import { connectDb } from './database/connect'

import authRoutes from './users/infrastructure/http/auth-route'
import noteRoutes from './notes/infrastructure/http/noter-route'

export default class Server {

    app: Application
    port: number | string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000

        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    dbConnection() {
        connectDb()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('notes-app-back')
        })
        this.app.use('/api/auth', authRoutes)
        this.app.use('/api/notes', noteRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`)
        })
    }

}