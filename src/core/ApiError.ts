class ApiError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

    static badRequest(message = 'Bad Request') {
        return new ApiError(message, 400);
    }

    static unauthorized(message = 'Unauthorized') {
        return new ApiError(message, 401);
    }

    static forbidden(message = 'Forbidden') {
        return new ApiError(message, 403);
    }

    static notFound(message = 'Not Found') {
        return new ApiError(message, 404);
    }

    static conflict(message = 'Conflict') {
        return new ApiError(message, 409);
    }

    static internal(message = 'Internal Server Error') {
        return new ApiError(message, 500);
    }
}

export default ApiError;
