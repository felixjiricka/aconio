import * as cors from 'cors';

const corsHandler = cors({
    origin: '*',
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Content-Length',
        'X-Requested-With',
        'Accept',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
});

import {Request, Response, https} from 'firebase-functions';
import {handleContact} from './handler/contact.handler';

export const handleContactRequest = https.onRequest((req: Request, res: Response) => {
    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            return;
        }

        handleContact(req, res)
            .then(() => {
                res.status(200).send();
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });
});
