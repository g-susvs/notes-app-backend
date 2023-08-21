import jwt from 'jsonwebtoken';

export const generateJWT = async (uid: string) => {
	return await new Promise((resolve, reject) => {
		const payload = { uid };

		jwt.sign(
			payload,
			process.env.SECRECT_KEY || 'secret_key',
			{
				expiresIn: '2h'
			},
			(err, token) => {
				if (err) {
					console.log('No se pudo generar JWT');
					console.log(err);
					reject(err);
				}
				resolve(token);
			}
		);
	});
};
