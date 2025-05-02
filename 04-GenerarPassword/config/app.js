import express from "express"
import cors from "cors"
import generatePassRoutes from '../src/GeneratePassword/generatePassRoutes.js'

const configs = (app)=> {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cors(
        {
            origin: 'http://localhost:5173', // cambia esto si usas otro puerto o dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
        }
    ))
}

const routes = (app)=> {
    app.use('/v1', generatePassRoutes)
}

export const initServer= ()=> {
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server runnin on port ${process.env.PORT}`);
        
    } catch (e) {
        console.error('Init server error: ', e);
    }
}