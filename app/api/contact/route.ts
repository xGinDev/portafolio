import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'jecl2912@gmail.com',
            subject: `Nuevo contacto: ${subject}`,
            html: `<p><strong>${name}</strong> (${email}) escribió:</p><p>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}