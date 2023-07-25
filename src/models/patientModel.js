import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    username : {
        type : String, 
        required : [true, "Please provide a username"], 
        unique: true,
    },
    weight : {
        type : Number, 
        required : [true, "Please provide a age"], 
        
    },
    height : {
        type : Number, 
        required : [true, "Please provide a height"], 
        
    }
})

const Patient = mongoose.models.newpatients || mongoose.model("patients", patientSchema)

export default Patient