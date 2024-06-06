import { NextResponse } from "next/server";
import { connect } from "@/db/dbconfig";
import bcrypt from "bcryptjs";
import Admin from "@/models/admin";

connect();

export async function POST(req, res) {
  console.log(
    "iasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
  );
  try {
    const body = await req.json();

    const pass = body.body.password;
    console.log(body.body);
    const hp = await bcrypt.hash(pass, 10);
    console.log(body, hp);
    const admin = new Admin({ username: body.body.username, password: hp });
    await admin.save();
    // const admin = await Admin.findOne({ username: body.username });
    // if (admin) {
    //   const isPasswordCorrect = await bcrypt.compare(pass, admin.password);
    //   if (isPasswordCorrect) {
    //     console.log(isPasswordCorrect);
    //   } else {
    //     console.log("Incorrect password");
    //   }
    // } else {
    //   console.log("User not found");
    // }

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ Message: "Error", status: 500 });
  }
}
