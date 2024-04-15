import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    throw new Error("Missing fields!");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "delivered@resend.dev",
      to: ["infotecdevs@gmail.com"],
      subject: "InfotecDevs",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json("success");
  } catch (e) {
    return NextResponse.json(e);
  }
}
