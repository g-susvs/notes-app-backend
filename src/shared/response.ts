import { Response } from "express";
import { NotFoundError, ValidationError } from "./errors";

export class Rsp {

    static success(res: Response, message: any = "", status: number) {

        return res.status(status).json({
            ok: true,
            status,
            body: message
        })
    }

    static error(res: Response, error: unknown) {

        let message: string
        let status: number


        if (
            error instanceof NotFoundError ||
            error instanceof ValidationError

        ) {
            message = error.message
            status = error.statusCode
        }
        else {
            message = "Internal server error"
            status = 500
        }

        return res.status(status).json({
            ok: false,
            status,
            message
        })
    }

}
