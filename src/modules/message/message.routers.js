import express from "express"
import { addMsg, alllMsg, shareProfile } from "./message.controller.js"
import { auth } from "../../middleware/auth.js"
import { validation } from "../../middleware/validation.js"
import { addMsgSchemaval,paramsVal } from "./message.validation.js"

let messageRouter=express.Router()


messageRouter.post('/messages',validation(addMsgSchemaval),addMsg)
messageRouter.get('/messages/:id',validation(paramsVal),auth, alllMsg)
messageRouter.get('/shareProfile',shareProfile)

export default messageRouter