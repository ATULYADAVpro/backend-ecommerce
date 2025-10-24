class ErrorHandler extends Error {
    constructor(statusCode, msg) {
        super()
        this.message = msg;
        this.status = statusCode;
        this.success = false;
    }

    static testError(msg = "demo error") {
        return ErrorHandler(400, msg)
    }
}

export default ErrorHandler