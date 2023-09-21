import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoute } from '../modules/auth/auth.routes';
import { ProfileRoutes } from '../modules/auth/profile.route';
import { CategoryRoutes } from '../modules/category/category.route';

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
  {
    path: '/',
    route: ProfileRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
