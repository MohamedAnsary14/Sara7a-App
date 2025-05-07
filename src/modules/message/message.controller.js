import { messageModel } from "../../../databases/models/message.model.js"
import { catchError } from "../../middleware/catchError.js"

import QRcode from "qrcode"

const addMsg = catchError(async (req, res) => {
    await messageModel.create(req.body)
    res.json({ message: "message created" })
})




const shareProfile = catchError(async (req, res) => {
    QRcode.toDataURL("http://localhost:3000/messages", (err, qr) => {

        res.send(`<img src="${qr}"/>`)
    })
})


const alllMsg = catchError(async (req, res) => {
    let messages = await messageModel.find({ receivedId: req.params.id })
    res.json({ message: 'success', messages })
})
export {
    addMsg,
    alllMsg,
    shareProfile

}