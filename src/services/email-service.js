var config = require('../config');
const nodemailer = require("nodemailer");

const transporter =  nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: config.sendMailtrapUser,
    pass: config.sendMailtrapPassword
  }
});


// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });


exports.send = async (to, subject, body) => {
  transporter.sendMail({
      to: to,
      from: 'hello@balta.io',
      subject: subject,
      html: body
  });
};