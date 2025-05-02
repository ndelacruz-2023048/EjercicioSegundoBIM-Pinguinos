import express from "express"
import generatePassRoutes from '../src/GeneratePassword/generatePassRoutes.js'

const configs = (app)=> {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    //app.use(cors())
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