import { type NextFunction, type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';
import { Rsp } from '../shared/response';
import { UnAuthorizedError } from '../shared/errors';

interface DecodedToken {
    uid: string;
}

declare global {
    namespace Express {
        interface Request {
            uid?: string;
        }
    }
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.header('x-token');

        if (!token) throw new UnAuthorizedError('No hatoken en la petición');

        const decodetoken = jwt.verify(token, process.env.SECRECT_KEY || 'secret_key') as DecodedToken;

        const { uid } = decodetoken
        req.uid = uid

    } catch (error) {
        return Rsp.error(res, error, 'token no valido')
    }

    next();
};