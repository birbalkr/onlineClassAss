import express from 'express'
import morgan from 'morgan'
import paymentRouter from '../routes/payment.routes.js'

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/payments", paymentRouter)


export default app