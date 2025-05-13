import mongoose from "mongoose"


export const dbConnection = () => {
    mongoose.connect(process.env.DB_ONLINE).then(() => {
        console.log("database connection successful");
    }).catch((err) => {
        console.log("database connection error", err);
    })
}
