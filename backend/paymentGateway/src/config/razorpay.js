import config from "./config.js"
import Razorpay from 'razorpay'



const razorpayInstance = new Razorpay({
    key_id: config.RAZORPAY_KEY_ID,
    key_secret: config.RAZORPAY_KEY_SECRET
})


export default razorpayInstance