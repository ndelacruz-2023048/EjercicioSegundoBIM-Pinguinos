import {initServer} from './app.js'
import { config } from 'dotenv'

config()
initServer()
console.log('Server started')