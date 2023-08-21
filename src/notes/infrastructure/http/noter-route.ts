import { Router } from 'express';
import { noteCtrl } from './dependencies';
import { validateFields } from '../../../middlewares/validate-fields';
import { body } from 'express-validator';
import { verifyJWT } from '../../../helpers/verify-jwt';

const router = Router();

router.use(verifyJWT);

router.get('/:id', noteCtrl.getById);
router.get('/', noteCtrl.getAll);
router.post(
	'/',
	[
		body('title', 'Es requerido').notEmpty(),
		body('content', 'Es requerido').notEmpty(),
		validateFields
	],
	noteCtrl.insert
);

export default router;
