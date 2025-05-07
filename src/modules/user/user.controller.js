import { userModel } from "../../../databases/models/user.model.js"
import { sendEmail } from "../../emails/sendEmail.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"
const signUp = catchError(async (req, res, next) => {
    await userModel.create(req.body)
    sendEmail(req.body.email, req.body.name)
    res.json({ message: 'success' })
})

const signIn = catchError(async (req, res, next) => {

    let user = await userModel.findOne({ email: req.body.email })
    if (user && bcrypt.compareSync(req.body.password, user.password)) {

        let token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_KEY)
        return res.json({ message: 'success', token })
    }
    next(new AppError('email or password is incorrect', 401))
})

const verifyEmail = catchError(async (req, res, next) => {
    jwt.verify(req.params.token, process.env.JWT_KEY, async (err, decoded) => {
        if (err) return next(new AppError(err, 401))

        await userModel.findOneAndUpdate({ email: decoded.email }, { verifyEmail: true })
        res.json({ message: 'success' })
    })

})
export {
    signUp,
    verifyEmail,
    signIn
}