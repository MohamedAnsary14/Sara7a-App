import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import { emailTemplate } from "./emailTemplate.js";

export const sendEmail = async (email, name) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mohammedansary911@gmail.com",
            pass: "ltgszozbcoggbisc",
        },
    });

    let token = jwt.sign({email},"MySecretKey")

    const info = await transporter.sendMail({
        from: '"mohamed Ansary 👻" <mohammedansary911@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        html: emailTemplate(token, name), // html body
    });

    console.log("Message sent: %s", info.messageId);


}