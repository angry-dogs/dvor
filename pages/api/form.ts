import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet from 'node-mailjet';

const ApiSaveForm = async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, phone, email } = req.body;

  if (process.env.NODE_ENV === 'development') {
    console.log('--- Skip sending email in development mode. Passed values:', name, phone, email);
    return res.status(200).json({ result: true });
    // return res.status(500).json({ result: false });
  };

  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
  });

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "noreply@kedrovy-dvor.com",
            Name: "«Кедровый двор»",
          },
          To: [
            { Email: "kedrovy-dvor@mail.ru" },
          ],
          Bcc: [
            { Email: "fbandrey@gmail.com" },
          ],
          Subject: `Новая заявка на сайте kedrovy-dvor.com, ${new Date().toLocaleString()}`,
          TextPart: `Добрый день! Поступила новая заявка на сайте kedrovy-dvor.com. Имя: ${name}, телефон: ${phone}, email: ${email}. Свяжитесь с клиентом для уточнения деталей, удачи!`,
          HTMLPart: `<h3>Добрый день!</h3><p style="font-size:14px">Поступила новая заявка на сайте kedrovy-dvor.com.<br/><br/>Имя: ${name}<br/>Телефон: ${phone}<br/>Email: ${email}<br/><br/>Свяжитесь с клиентом для уточнения деталей,<br/>Удачи!</p>`
        }
      ]
    })

  request
    .then((result) => {
      console.log(result.body);
      return res.status(200).json({ result: true });
    })
    .catch((err) => {
      console.log(err.statusCode);
      return res.status(500).json({ result: false });
    });
};

export default ApiSaveForm;
