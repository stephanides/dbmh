import nodemailer from 'nodemailer';
const Handlebars = require('handlebars');
import fs from 'fs';
import path from 'path';
import Contact from '../../../../db/models/Contact';
import { validateHuman } from '../../utils';
import ModError from '../../utils/error';

// const orderCreatedTemplate = fs.readFileSync(
//   path.join(__dirname, '../../../../../public/email/order.html'),
//   'utf8'
// );

// function sendClientMailNotification(orderData: any): Promise<void> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // create reusable transporter object using the default SMTP transport
//       let transporter = nodemailer.createTransport({
//         host: process.env.EMAIL_HOST,
//         port: 587, // 587,
//         secure: false, // true, // ssl
//         auth: {
//           user: process.env.EMAIL_LOGIN, // generated ethereal user
//           pass: process.env.EMAIL_PASS, // generated ethereal password
//         },
//       });
//       const templateOrderMail = Handlebars.compile(orderCreatedTemplate);
//       var replacement = {
//         client: orderData.client,
//         email: orderData.email,
//         phone: orderData.phone ?? '-',
//         note: orderData.note,
//         passengers: orderData.passengers ?? '-',
//         dateFrom: orderData.dateFrom ?? '',
//         dateTo: orderData.dateTo ?? '',
//       };

//       console.log('replacement', replacement);

//       const orderMailToSend = templateOrderMail(replacement);

//       // send mail with defined transport object
//       await transporter.sendMail({
//         from: '"Fermo - správny partner pre Vašu cestu" <info@fermo.sk>',
//         to: orderData.email, // list of receivers
//         subject: 'Ďakujeme za vašu objednávku.', // Subject line
//         html: orderMailToSend, // html body
//       });

//       resolve();
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

function sendInfoMailNotification(data: any): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587, // 587,
        secure: false, // true, // ssl
        auth: {
          user: process.env.EMAIL_LOGIN, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        },
      });
      await transporter.sendMail({
        from: '"DayByMeMediaHouse" <formular@daybyme.com>',
        to: 'formular@daybyme.com', // list of receivers
        subject: 'Nová správa zo stránky daybymemediahouse.sk', // Subject line
        html: `<p>Meno a priezvisko: ${
          data.name
        }</p><p>Email: <a href='mailto:${data.email}'>${
          data.email
        }</a></p><p>Správa: <span style="font-weight: bold">${
          data.message ?? ''
        }</span>`, // html body
      });

      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

const createContact: (root: any, args: any, ctx: any) => Promise<any> = async (
  root,
  { createContactInput },
  ctx
) => {
  try {
    // const human = await validateHuman(createContactInput.recaptchaToken);

    // if (!human) {
    //   throw new ModError(400, 'You are robot!');
    // }

    const contactData = new Contact(createContactInput);

    const newContact = await Contact.create(contactData);

    const { __v, ...result } = newContact.toObject();

    try {
      await sendInfoMailNotification(createContactInput);

      // await sendClientMailNotification(createOrderInput);
    } catch (err) {
      throw new ModError(500, 'Nastala chyba');
    }

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default createContact;
