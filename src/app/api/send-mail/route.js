import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.json(); // Parse the request body as JSON

  console.log(formData);
  const email = formData.formData.username;
  const address = formData.formData.address;
  const phone = formData.formData.phone;
  console.log(email, address, password);

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });
  console.log(transporter);
  try {
    const mail = await transporter.sendMail({
      from: username,
      to: email,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${email} </p>
            <p>Email: ${email} </p>
            <p>Message: ${phone}, ${address} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
