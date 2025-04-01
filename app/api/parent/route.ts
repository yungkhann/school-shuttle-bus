import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const {
      parentName,
      email,
      phone,
      childName,
      childGrade,
      address,
      message,
    } = await req.json();

    const botToken = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `
      New Parent Inquiry:
      Parent Name: ${parentName}
      Email: ${email}
      Phone: ${phone}
      Child's Name: ${childName}
      Child's Grade: ${childGrade}
      Address: ${address}
      Message: ${message}
    `;

    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: text,
    });

    if (response.data.ok) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send message.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending message.' },
      { status: 500 }
    );
  }
}
