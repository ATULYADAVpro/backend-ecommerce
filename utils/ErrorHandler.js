class ErrorHandler extends Error {
    constructor(statusCode, msg) {
        super()
        this.message = msg;
        this.status = statusCode;
        this.success = false;
    }

    static testError(msg = "demo error") {
        return new ErrorHandler(400, msg)
    }

    static requiredAllFiled(status = 400, msg = 'all filed are required!') {
        return new ErrorHandler(status, msg)
    }

    
}

export default ErrorHandler