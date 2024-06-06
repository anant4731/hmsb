import { connect } from "@/db/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import NewPatient from "@/models/patientModel";

connect();

export async function GET(request, { params }) {
  const email = request.nextUrl.searchParams.get("email");
  console.log("EMAIL => ", email);
  try {
    const patient = await NewPatient.findOne({ username: email });
    if (!patient) {
      return NextResponse.json(
        { error: "Patient does not exists" },
        { status: 400 }
      );
    }

    console.log("patient - ", patient);
    return NextResponse.json(patient);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
