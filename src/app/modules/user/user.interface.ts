import { Role } from '@prisma/client';

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: Role;
  contactNo: string;
  address: string;
  profileImg: string;
};
export type ILoginUser = {
  email: string;
  password: string;
};
