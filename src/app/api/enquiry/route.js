import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();
    const { gRecaptchaToken, company_name, email, message } = body;

    const reCaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=6LfBYCgqAAAAAAPLi71QrZA5bPhsGZvnDccYnGAW&response=${gRecaptchaToken}`,
      }
    );

    const reCaptchaJson = await reCaptchaRes.json();
    // console.log(
    //   reCaptchaJson,
    //   "Response from Google reCatpcha verification API"
    // );

    if (reCaptchaJson?.score > 0.5) {
      // Define the file path
      // const filePath = path.join(process.cwd(), "data", "enquiry.json");
      const filePath = path.join(process.cwd(), "public", "data", "enquiry.json");

      // Read the existing data
      const fileData = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(fileData);

      // Add new enquiry data
      data.push({ company_name, email, message });

      // Write the updated data back to the file
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));

      return new Response(
        JSON.stringify({
          status: "success",
          message: "Enquiry submitted successfully",
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          status: "failure",
          message: "Google ReCaptcha Failure",
        }),
        { status: 200 }
      );
    }
  } catch (err) {
    //console.error("Error submitting the enquiry form:", err);
    return new Response(
      JSON.stringify({
        status: "failure",
        message: "Error submitting the enquiry form",
      }),
      { status: 500 }
    );
  }
}
