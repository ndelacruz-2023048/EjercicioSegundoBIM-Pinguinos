import { Router } from 'express'
import { generatePass } from './generatePass.js'

const api = Router()

api.post('/generate', generatePass)

export default api