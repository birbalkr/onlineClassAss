import { body, validationResult } from 'express-validator'


export const registerValidation = [
    body("email")
        .exists().withMessage("Email is Required").bail()
        .isEmail().withMessage("Invalid Email Address").bail(),

    body('phone')
        .exists().withMessage("Phone Number is Required").bail()
        .isMobilePhone("en-IN").withMessage("Invalid phone Number").bail(),

    body("password")
        .exists().withMessage("Password is Required").bail()
        .trim().isLength({ min: 6 }).withMessage("password at least 6 Characters").bail(),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Invalid Request",
                errors: errors.array()
            })
        }
        next()
    }
]