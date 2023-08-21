import { type Request, type Response } from 'express';
import { type UserUseCase } from '../../application/user-use-case';
import { Rsp } from '../../../shared/response';

export class UserController {
	constructor(private readonly userUseCase: UserUseCase) {}

	public register = async ({ body }: Request, res: Response) => {
		try {
			const user = await this.userUseCase.register(body);
			return Rsp.success(res, user, 201);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};

	public login = async ({ body }: Request, res: Response) => {
		try {
			const user = await this.userUseCase.login(body);

			return Rsp.success(res, user, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};

	public revalidateJwt = async (req: Request, res: Response) => {
		try {
			const { uid = '' } = req;
			const user = await this.userUseCase.revalidateJwt(uid);

			return Rsp.success(res, user, 200);
		} catch (error) {
			console.log(error);
			return Rsp.error(res, error);
		}
	};
}
