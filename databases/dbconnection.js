import mongoose from "mongoose"


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("database connection successful");
    }).catch((err) => {
        console.log("database connection error", err);
    })
}
