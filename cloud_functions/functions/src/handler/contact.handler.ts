import {Request, Response} from 'firebase-functions';
import * as path from 'path';
import * as fs from 'fs';
import * as handlebars from 'handlebars';
import {getMailTransporter} from '../utils/mail.utils';

export const handleContact = (req: Request, res: Response): Promise<void> => {
    const viewsSrc = path.join(__dirname, '..', '..', 'views');
    const filePath = path.join(viewsSrc, 'contactform.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);

    const {name, sender, message} = req.body;

    const replacements = {
        name: name,
        message: message,
    };

    const replacedHTML = template(replacements);

    const mailOptions = {
        from: 'internal@aconio.net',
        to: 'felixjiricka@outlook.com',
        subject: 'Aconio.net Kontaktanfrage',
        replyTo: sender,
        html: replacedHTML,
    };

    return getMailTransporter()
        .sendMail(mailOptions)
        .then(() => {
            return Promise.resolve();
        })
        .catch((error: any) => {
            return Promise.reject(error);
        });
};
