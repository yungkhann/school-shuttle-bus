import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { fullName, phone, licenseCategory, experience } = await req.json();

    const botToken = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `
🚗 **Новая анкета водителя** 🚗

👤 **Имя и фамилия:** ${fullName}

📞 **Телефон:** ${phone}

📋 **Категория ВУ:** ${licenseCategory}

🔧 **Опыт вождения:**  
${experience}
`;

    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown',
    });

    if (response.data.ok) {
      return NextResponse.json(
        { success: true, message: 'Анкета успешно отправлена!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'Ошибка при отправке анкеты.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Ошибка при отправке анкеты в Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Ошибка при отправке.' },
      { status: 500 }
    );
  }
}
