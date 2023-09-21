import { Role } from '@prisma/client';
import z from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is Required',
    }),
    email: z
      .string({
        required_error: 'email is Required',
      })
      .email(),
    password: z.string({
      required_error: 'password is Required',
    }),
    role: z.enum([...Object.values(Role)] as [string, ...string[]], {
      required_error: 'role is Required',
    }),
    contactNo: z.string({
      required_error: 'contactNo is Required',
    }),
    address: z.string({
      required_error: 'address is Required',
    }),
    profileImg: z
      .string({
        required_error: 'profileImage is Required',
      })
      .url(),
  }),
});
const update = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum([...Object.values(Role)] as [string, ...string[]]).optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().url().optional(),
  }),
});

export const UserValidation = {
  create,
  update,
};
