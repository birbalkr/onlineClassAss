import userModel from "../models/user.model.js"

/** 
 * req.bosy = {email,phone,password}
*/
export const register = async (req, res) => {
    const { email, phone, password } = req.body

    const user = await userModel.create({
        email,
        phone,
        password
    })

    res.status(201).json({
        message: "User register Successfully",
        data: {
            email,
            phone,
            id: user._id
        }
    })
} 