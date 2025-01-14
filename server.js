const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
// routes path
const authRoutes = require("./routes/authRoutes")
const errorHandler = require('./middelwares/errorMiddleware')


// dotenv
dotenv.config()

// mongo connection
connectDB()

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler)

const PORT = process.env.PORT

//API routes
app.use("/api/v1/auth", authRoutes);

// listen server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
})