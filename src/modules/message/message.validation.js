import Joi from "joi"

const addMsgSchemaval = Joi.object({
    message: Joi.string().min(2).max(200).required(),
    receivedId: Joi.string().hex().length(24)

})
const paramsVal=Joi.object({
    id: Joi.string().hex().length(24)
})
export {
    addMsgSchemaval,
    paramsVal
}