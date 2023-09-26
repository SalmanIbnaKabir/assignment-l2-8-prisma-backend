"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is Required',
        }),
        email: zod_1.z
            .string({
            required_error: 'email is Required',
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'password is Required',
        }),
        role: zod_1.z.enum([...Object.values(client_1.Role)], {
            required_error: 'role is Required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'contactNo is Required',
        }),
        address: zod_1.z.string({
            required_error: 'address is Required',
        }),
        profileImg: zod_1.z.string({
            required_error: 'profileImage is Required',
        }),
    }),
});
const login = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'email is Required',
        }),
        password: zod_1.z.string({
            required_error: 'password is Required',
        }),
    }),
});
exports.AuthValidation = {
    create,
    login,
};
