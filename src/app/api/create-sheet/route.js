import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: reqBody.token });
    // console.log(reqBody, auth);
    const sheets = google.sheets({ version: "v4", auth });
    // console.log(sheets);
    const response = await sheets.spreadsheets.create({
      resource: {
        properties: {
          title: "New Sheet Title",
        },
      },
    });
    console.log(response);
    const spreadsheetId = response.data.spreadsheetId;
    await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId,
        resource: {
          valueInputOption: "RAW",
          data: [
            {
              range: "Sheet1!A1:B2", // Update the range as needed
              values: [
                ["Name", "Age"],
                ["John Doe", "30"],
              ],
            },
          ],
        },
      });
    // const { username, height, weight } = reqBody;

    // validation

    return NextResponse.json({
      message: "New Patient created Successfully",
      success: true,
      response
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
