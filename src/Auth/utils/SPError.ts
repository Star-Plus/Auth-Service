export class SPError extends Error {
    status: number;
}

export class InternalServerError extends SPError {
    status: number = 505;
}

export class NotFoundError extends SPError {
    status: number = 404;
}

export class BadRequestError extends SPError {
    status: number = 400; 
}

export class UnauthorizedError extends SPError {
    status: number = 401;
}