import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/Email/plantillaEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function GET() {
    return NextResponse.json({
        message: "👻 Endpoint de envío de correos activo 👻",
        metodo: "GET",
        uso: "Envía un POST a este endpoint para mandar correos.",
    });
}
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nombre, telefono, correo, desc } = body;
        const destinatarios = [
            // "info@cavialife.com",
            "it03@cargomty.com"
        ];

        const email = await resend.emails.send({

            from: 'CaviaLife <no-reply@cavialife.com>',
            to: destinatarios,
            subject: nombre + " Datos para contacto",
            react: EmailTemplate({
                nombre: nombre, telefono: telefono, correo: correo, desc: desc
            }),
       

        });
        return NextResponse.json({ message: "Correo enviado correctamente", email });
    } catch (error) {
        console.error("Error enviando correo", error);
        return NextResponse.json({ message: "FATAL ERROR ENVIANDO CORREO" }, { status: 500 })
    }
}

