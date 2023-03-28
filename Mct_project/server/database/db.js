import mongoose from "mongoose";

export const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.jugocrp.mongodb.net/?retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log("database is connected");
    }catch(err){
        console.log("Error to connect database", err)
    }
}

export default Connection;