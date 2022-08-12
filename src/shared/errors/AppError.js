export class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized User') {
        super(message);
        this.name = 'UnauthorizedError'
    }
}

export class RequiredFieldError extends Error {
    constructor(message = 'Field is required') {
        super(message);
        this.name = 'RequiredFieldError'
    }
}