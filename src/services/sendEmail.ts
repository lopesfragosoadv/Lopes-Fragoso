import nodemailer from "nodemailer";

export const mailerService = (
  name: string,
  email: string,
  phone: string,
  text: string
) => {
  if (!name || !email || !phone || !text) {
    throw new Error("parameters were not provided");
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const message = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL}`,
    subject: "cliente do site",
    html: `<p>nome: ${name},<br /> email: ${email},<br /> telefone: ${phone}<br />
    ${text}
    </p>`,
  };

  return transporter.sendMail(message);
};
