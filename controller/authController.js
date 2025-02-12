const errorHandler = require('../middelwares/errorMiddleware')
const userModel = require('../models/userModel')
const errorResponse = require('../utils/errorResponse')

// JWT TOKEN
exports.sendToken = (user,statusCode, res) => {
    const token = user.getSignedToken(res)
    res.status(statusCode).json({
        success: true,
        token,
    })
}

// Register
exports.registerController = async (req, res, next) => {
    try {
        const {username, email, password} = req.body
        // existing user
        const existingEmail = await userModel.findOne({email})
        if(existingEmail){
            return next(new errorResponse('Email is already exist', 500))
        }
        const user = await userModel.create({username, email, password})
        this.sendToken(user, 201, res)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Login
exports.loginController = async (req, res, next) => {
    try {
        const {email,password} = req.body
        
        // validatiom
        if(!email || !password){
            return next(new errorResponse('please provide email or password'))
        }
        const user = await userModel.findOne({email})
        if(!user){
            return next(new errorResponse('Invalid Information', 401))
        }

        const isMatch = await user.matchPassword(password)
        if(!isMatch){
            return next(new errorHandler('Invalid Information', 401))
        }

        // res
        this.sendToken(user, 200, res)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

// logOut
exports.logoutController = async (req, res) => {
    res.clearCookie('refreshToken');
    return res.status(200).json({
        success: true,
        message: 'LogOut Successfully'
    })
}