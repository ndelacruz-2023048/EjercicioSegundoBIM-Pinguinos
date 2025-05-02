'use strict'

import express from 'express'
import cors from 'cors'
import { Temperatura } from '../src/Ejercicio-3/Ejercicios-temperarura.js'

const configs = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
}

const routes = (app)=>{
    app.use('/v1/temperatura',Temperatura)
}

//Ejecutarmos el servidor
export const initServer = ()=>{
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    }catch(err){
        console.error('Server init failed', err)
    }
}