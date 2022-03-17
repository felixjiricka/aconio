import {Request, Response, https} from 'firebase-functions';
import {handleContact} from './handler/contact.handler';

export const handleContactRequest = https.onRequest((req: Request, res: Response) => {
    handleContact(req, res)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});
