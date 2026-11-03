import { Router } from 'express'
import { register } from '../controllers/auth.controller.js'
import { registerValidation } from '../validators/auth.validtor.js'


const routes = Router()


/** 
 * POST /api/auth/register
 * req.bosy = {email,phone,password}
*/


routes.post("/register", registerValidation, register)

export default routes