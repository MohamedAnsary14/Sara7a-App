import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: {
        type: Number,
        min: [10, 'too short Age'],
        max: [80, 'too long Age']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    verifyEmail: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }


}, { timestamps: true })

export const userModel = mongoose.model('user', schema)