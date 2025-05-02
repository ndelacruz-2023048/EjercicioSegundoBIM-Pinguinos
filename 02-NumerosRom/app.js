'use strict'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import numbersRomans from './numerosRomanos/numbersRomans.routes.js'

const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/app', numbersRomans)
}

//Ejecutar el servidor
export const initServer = ()=>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Servidor iniciado en el puerto ${process.env.PORT}`)
    } catch (error) {
        console.log('Server init failed',error)
    }
}