import { Router } from 'express'
import { register } from '../controllers/auth.controller.js'


const routes = Router()


/** 
 * POST /api/auth/register
 * req.bosy = {email,phone,password}
*/


routes.post("/register", register)

export default routes