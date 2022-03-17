import {config} from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.easyname.com',
    port: 465,
    secure: true,
    auth: {
        type: 'LOGIN',
        user: config().mail.user,
        pass: config().mail.password,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
        console.log('Server is ready to take our messages');
    }
});

export const getMailTransporter = () => {
    return transporter;
};
