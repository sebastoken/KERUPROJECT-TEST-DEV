

const nodemailer = require('nodemailer');

export default async (req, res) => {
  const { email, souvenir_name } = req.body;
  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
     },
 });
 try {
    await transport.sendMail({
      from: "bienvenue@kerudao.org",
      to: email,
      subject: `KERU PROJECT`,
      html: ` <i>English below</i>
      <p>${souvenir_name}</p><br>
      Nous vous invitons dès à présent à vous rendre sur le site www.kerudao.org afin de créer votre compte (quelques secondes suffisent).<br>
      Une fois votre compte crée, nous vous enverrons votre souvenir digital directement sur votre portefeuille blockchain.<br><br>
      <p>${souvenir_name}</p><br>
      From now, you can go directly to www.kerudao.org to create your account (few seconds needed).<br>
      Once created, we'll send your digital souvenir directly to your blockchain wallet.<br><br>
      <strong>L'Équipe KERU PROJECT</strong>
    `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};