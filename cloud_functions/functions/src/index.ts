import {Request, Response, https, logger} from 'firebase-functions';

export const handleContactRequest = https.onRequest((req: Request, res: Response) => {
    logger.log(req);
});
