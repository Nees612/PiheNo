const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();
require('dotenv').config()

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.database.ref('workshoppers/{workshopperId}').onCreate((snapshot) => {
    const data = snapshot.val()

    let authData = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD
        }
    });

    authData.sendMail({
        from: 'info.piheno@anaga.com',
        to: `${data.Email}`,
        subject: 'PiheNő Workshop',
        text: 'Jelentkezés megerősítése',
        html: 'Jelentkezés megerősítése'
    }).then(console.log('Email is succesfully sent.')).catch(err => console.log(err));
})