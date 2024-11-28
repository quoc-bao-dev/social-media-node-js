import { PaginagtionParams } from '../core/ApiResponseWithPagination';
import ApiResponse from '../core/ApiResponse';
import ApiResponseWithPagination from '../core/ApiResponseWithPagination';

export const createResponse = ({
    statusCode = 200,
    message = 'Successfuly!',
    data = null,
}) => {
    return ApiResponse.create(statusCode, message, data);
};

export const createResponseWithPagination = ({
    statusCode = 200,
    message = 'Successfuly!',
    data = null,
    pagination = {} as PaginagtionParams,
}) => {
    return ApiResponseWithPagination.createResponse(
        statusCode,
        message,
        data,
        pagination
    );
};
