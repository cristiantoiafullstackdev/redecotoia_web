/* SINTAXIS: Node.js / Next.js (Server-Side)
   ESTE BLOQUE: Importación de Nodemailer para el manejo de correos y NextResponse para gestionar las respuestas HTTP.
*/
import * as nodemailer from "nodemailer";
import { NextResponse } from "next/server";

/* SINTAXIS: Next.js App Router (Route Handler)
   ESTE BLOQUE: Define una función asíncrona para manejar peticiones HTTP POST. 
   Se ejecuta exclusivamente en el servidor, protegiendo las credenciales sensibles.
*/
export async function POST(req: Request) {
  try {
    /* SINTAXIS: JavaScript (Destructuring & Await)
       ESTE BLOQUE: Obtiene los datos enviados desde el formulario cliente. 
       Se incluye 'serviceType' para categorizar la consulta automáticamente.
    */
    const { name, email, phone, serviceType, message } = await req.json();

    /* SINTAXIS: Nodemailer (Transporter Configuration)
       ESTE BLOQUE: Configura el túnel de envío. Utiliza variables de entorno para el usuario y la contraseña (App Password),
       garantizando que no se filtren datos privados en el código fuente.
    */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        // Evita errores de certificados en entornos de desarrollo o redes específicas
        rejectUnauthorized: false
      }
    });

    /* SINTAXIS: Nodemailer (Email Method)
       ESTE BLOQUE: Ejecuta el envío del correo. Se construye un cuerpo HTML dinámico 
       que organiza la información para que el receptor la lea con claridad.
    */
    await transporter.sendMail({
      from: `"Landing Contact" <${process.env.MAIL_USER}>`,
      to: "toiacristiandaniel@gmail.com",
      // Asunto dinámico: Ayuda a filtrar correos por tipo de servicio en la bandeja de entrada
      subject: `Nueva consulta: ${serviceType}`, 
      html: `
        <h3>Nuevo mensaje desde la landing</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio solicitado:</strong> ${serviceType.toUpperCase()}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    /* SINTAXIS: Web API (JSON Response)
       ESTE BLOQUE: Notifica al frontend que el proceso terminó con éxito (status 200 por defecto).
    */
    return NextResponse.json({ success: true });

  } catch (error) {
    /* SINTAXIS: Error Handling
       ESTE BLOQUE: Captura cualquier fallo (ej. credenciales inválidas o falta de red) 
       y devuelve un error 500 para que el cliente pueda informar al usuario.
    */
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Error enviando el correo" }, 
      { status: 500 }
    );
  }
}