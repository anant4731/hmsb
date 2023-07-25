import { connect } from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import NewPatient from "@/models/newPatientModel";


connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { username } = reqBody;

        // validation
        const patient = await NewPatient.findOne({ username })
        if (!patient) {
            return NextResponse.json({ error: "Patient does not exists" }, { status: 400 })
        }
        
        console.log("patient - ", patient);
        return NextResponse.json(patient)

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}