import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoute } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
