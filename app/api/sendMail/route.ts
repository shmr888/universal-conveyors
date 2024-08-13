const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  console.log(data)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAILID,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  console.log("Sending... ");

  const contentkeys = Object.keys(data)
  let message = ""

  contentkeys.forEach((content, index) => {
    message += `<b>${content}:</b> ${data[content]} <br>`
  })

  console.log(message)


  const info = await transporter.sendMail({
    from: `"${data.name} 👻" <${data.email}>`,
    to: `${process.env.MAILID}, ashwinravi917@gmail.com`,
    subject: "Response from Universal Conveyors ✔",
    text: message,
    html: message,
  });

//   console.log("Message sent: %s", info.messageId);

  return NextResponse.json({
    status: "Success",
  });
}
