import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  data: {
    type: Object,
  },
});

const Patient = mongoose.models.patients || mongoose.model("patients", patientSchema);

export default Patient;
