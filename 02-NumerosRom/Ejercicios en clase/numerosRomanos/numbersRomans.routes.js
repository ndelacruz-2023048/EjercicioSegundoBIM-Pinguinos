import { Router } from "express"

import {numRomans } from "./numbersRomans.controller.js"

const numbersRomans = Router()

numbersRomans.post('/numbersromans', numRomans);
export default numbersRomans