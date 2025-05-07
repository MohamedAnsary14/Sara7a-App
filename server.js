process.on('uncaughtException',(err)=>{
    console.log('error',err);
})

import express from 'express'
import { dbConnection } from './databases/dbconnection.js'
import userRouter from './src/modules/user/user.routers.js'
import dotenv from "dotenv"
import messageRouter from './src/modules/message/message.routers.js'
import { AppError } from './src/utils/appError.js'
import { globalError } from './src/middleware/globalErrorMiddleware.js'
const app = express()
const port = 3000

app.use(express.json())
dotenv.config()
app.use(userRouter)
app.use(messageRouter)
app.get('/', (req, res) => res.send('Hello World!'))
dbConnection()

app.use('*', (req, res, next) => {
    next(new AppError(`Not Found endPoint : ${req.originalUrl}`, 404))

})

app.use(globalError)
process.on('unhandledRejection', (err) => {
    console.log('error',err);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))