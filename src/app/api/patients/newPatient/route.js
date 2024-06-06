import { connect } from "@/db/dbconfig";
import Patient from "@/models/patientModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);

    const patient = Patient({
      username: reqBody.data.username,
      data: reqBody.data,
    });
    console.log(patient);
    await patient.save();

    return NextResponse.json({
      message: "New Patient created Successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
