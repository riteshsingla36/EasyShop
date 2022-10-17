const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API);

const sendMail = async (email, subject, text, html) => {
  try {
    const msg = {
      html,
      text,
      subject,
      to: email,
      from: process.env.HOST_EMAIL,
    };
    
    await sgMail.send(msg);
  } catch (err) {
    console.log('ERROR_MAILING', err);
  } finally {
    return;
  }
};

module.exports = {sendMail};
