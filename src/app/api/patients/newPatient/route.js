import { connect } from "@/dbConfig/dbConfig";
import NewPatient from "@/models/newPatientModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { username, height, weight } = reqBody;

        // validation

        const patient = await NewPatient.findOne({ username })
        if (patient) {
            return NextResponse.json({ error: "Patient already exists" }, { status: 400 })
        }
        console.log(patient);

        const nPatient = new NewPatient({ username, height, weight })
        const savedNewPatient = await nPatient.save();
        console.log(savedNewPatient);

        return NextResponse.json({ message: "New Patient created Successfully", success: true, savedNewPatient })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}