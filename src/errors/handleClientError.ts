import { Prisma } from '@prisma/client';
import { IGenericErrorMessage } from '../interfaces/error';

const handleClientError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message = '';
  const statusCode = 400;

  if (error.code === 'P2025') {
    message = (error.meta?.cause as string) || 'Record not found!';
    errors = [
      {
        path: '',
        message: message ? message : 'something went wrong',
      },
    ];
  } else if (error.code === 'P2003') {
    message = (error.meta?.field_name as string) || 'Invalid Foreign Key | ID';
    errors = [
      {
        path: '',
        message: message ? message : 'something went wrong',
      },
    ];
  } else if (error.code === 'P2002') {
    message = (error.meta?.target as string)[0] + ' is Used' || 'Email is used';
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

export default handleClientError;
