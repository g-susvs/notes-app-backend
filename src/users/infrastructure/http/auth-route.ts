import { Router } from 'express';
import { userCtrl } from './dependencies';
import { validateFields } from '../../../middlewares/validate-fields';
import { body } from 'express-validator';
import { verifyJWT } from '../../../helpers/verify-jwt';

const router = Router();

router.post(
	'/new',
	[
		body('name', 'Es requerido').notEmpty(),
		body('email', 'Es requerido').isEmail(),
		body('password', 'Es requerido').notEmpty(),
		body('password', 'Debe tener 6 caracteres mínimo').isLength({ min: 6 }),
		validateFields
	],
	userCtrl.register
);

router.post(
	'/login',
	[
		body('email', 'Es requerido').notEmpty(),
		body('password', 'Es requerido').notEmpty(),
		body('password', 'Debe tener 6 caracteres mínimo').isLength({ min: 6 }),
		validateFields
	],
	userCtrl.login
);

router.get('/renew', verifyJWT, userCtrl.revalidateJwt);

export default router;
