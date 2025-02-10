import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export class ErrorResponse extends Error {
    discriminator = 'error-response'
    constructor(readonly statusCode: number, readonly debugMessage: string | undefined, readonly loggable: boolean) {
        super(debugMessage)
    }
}

function isErrorResponse(variable: any) {
    return variable['discriminator'] === 'error-response'
}

export const errorMiddleware: ErrorRequestHandler = (cause: Error, request: Request, response: Response, _next: NextFunction) => {
    delete request.body['secret']

    if (isErrorResponse(cause)) {
        const error = cause as ErrorResponse
        if (error.loggable) {
            console.error(error.debugMessage, request.path, request.query, request.body)
        }

        response.status(error.statusCode ?? 500).send({ debugMessage: error.debugMessage })
        return
    }

    console.error(cause.message, request.path, request.query, request.body)
    response.status(500).send({ errorCode: 'E0000', debugMessage: cause.message })
}