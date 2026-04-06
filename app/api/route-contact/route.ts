import * as nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Extrae el nuevo campo 'serviceType'
    const { name, email, phone, serviceType, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Landing Contact" <${process.env.MAIL_USER}>`,
      to: "toiacristiandaniel@gmail.com",
      subject: `Nueva consulta: ${serviceType}`, // El asunto ahora es dinámico
      html: `
        <h3>Nuevo mensaje desde la landing</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio solicitado:</strong> ${serviceType.toUpperCase()}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Error enviando el correo" }, { status: 500 });
  }
}