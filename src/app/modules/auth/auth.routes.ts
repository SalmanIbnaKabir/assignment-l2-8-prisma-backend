import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.create),
  AuthController.createAuthUser,
);
router.post(
  '/signin',
  validateRequest(AuthValidation.login),
  AuthController.loginUser,
);
router.post('/refresh-token', AuthController.refreshToken);

export const AuthRoute = router;
