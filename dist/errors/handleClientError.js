"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleClientError = (error) => {
    var _a, _b, _c;
    let errors = [];
    let message = '';
    const statusCode = 400;
    if (error.code === 'P2025') {
        message = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || 'Record not found!';
        errors = [
            {
                path: '',
                message: message ? message : 'something went wrong',
            },
        ];
    }
    else if (error.code === 'P2003') {
        message =
            ((_b = error.meta) === null || _b === void 0 ? void 0 : _b.field_name) + ' Not Found' ||
                'Invalid Foreign Key | ID';
        errors = [
            {
                path: '',
                message: message ? message : 'something went wrong',
            },
        ];
    }
    else if (error.code === 'P2002') {
        message = ((_c = error.meta) === null || _c === void 0 ? void 0 : _c.target)[0] + ' is Used' || 'Email is used';
        console.log(message);
        errors = [
            {
                path: '',
                message: message ? message : 'something went wrong',
            },
        ];
    }
    return {
        statusCode,
        message,
        errorMessages: errors,
    };
};
exports.default = handleClientError;
