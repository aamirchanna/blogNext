import mongoose from "mongoose";

const connectMongodb = async () => {
     let isConnected = false
     if(isConnected) {
        return "db is already connected"
     }
    try {
       let connected =  await mongoose.connect(process.env.MONGODB_URL);
       console.log("db is connected successfully")
        if(connected.connection.readyState == 1)  isConnected = true
        
       console.log("connected Mongodb")
    } catch (error) {
        console.log("error in connection " , error)
    }
}
export default connectMongodb