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
		body('emoji', 'Es requerido').notEmpty(),
		body('emoji', 'Debe tener solo un elemento').isLength({ min: 1, max: 1 }),
		body('title', 'Es requerido').notEmpty(),
		validateFields
	],
	noteCtrl.insert
);
router.put('/:id', noteCtrl.update);
router.delete('/:id', noteCtrl.delete);

export default router;
