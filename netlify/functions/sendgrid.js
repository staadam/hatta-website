const sgMail = require('@sendgrid/mail');
const axios = require('axios');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const validateHuman = async (token) => {
  const secretKey = process.env.RECAPTCHA_PRIVATE_KEY;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
  );

  return data.success;
};

exports.handler = async function (req, res) {
  const { name, email, message, token } = JSON.parse(req.body);

  const mailMessage = `
    From: ${name},
    Sender mail: ${email},
    Message: ${message}
  `;

  const msg = {
    to: 'pangielski214@gmail.com',
    from: 'pangielski214@gmail.com',
    subject: `Mail from ${name}`,
    text: mailMessage,
  };

  const human = validateHuman(token);

  if (!human) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "You're a bot!!!" }),
    };
  }

  await (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'message send' }),
  };
};
