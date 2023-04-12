// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailerService } from "@/services/sendEmail";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method !== "POST")
    return response.status(405).json({ message: "method not supported" });
  const { name, email, phone, text } = request.body;
  try {
    await mailerService(name, email, phone, text);
    response.status(200).json({ message: "Message sent!" });
  } catch (err: any) {
    console.error(err.message);
    return response.status(500).json({ message: err.message });
  }
}
