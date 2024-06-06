import { connect } from "@/db/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import NewPatient from "@/models/patientModel";

connect();

export async function GET(request) {
  try {
    const patients = await NewPatient.find({});
    if (!patients) {
      return NextResponse.json(
        { error: "Patient does not exists" },
        { status: 400 }
      );
    }

    console.log("patient - ", patients);
    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
