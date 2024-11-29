import { Router } from 'express';
import authenRoutes from './auth.routes';
const Routes = Router();

Routes.use('/auth', authenRoutes);

export default Routes;
