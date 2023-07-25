import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("DB Connected Successfully")
        })

        connection.on('error', ()=> {
            console.log("UNABLE TO CONNECT TO DB")
            process.exit();
        })
    }
    catch (error) {
        console.log('something went wrong ', error)
    }
}