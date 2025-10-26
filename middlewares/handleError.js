import { DEBUG } from "../config/index.js";
import ErrorHandler from "../utils/ErrorHandler.js";

async function handleError(err, req, res, next) {
    let statusCode = 500;
    let data = {
        message: 'Internal Server Error',
        success: false,
        ...(DEBUG === "true" && { originalError: err.message }),
    }

    if (err instanceof ErrorHandler) {
        statusCode = err.status;
        data = {
            message: err.message

        }
    }

    return res.status(statusCode).json(data)
}

export default handleError