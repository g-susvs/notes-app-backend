import bcryptjs from 'bcryptjs';
import { CreateUserDto, LoginUserDto } from "../domain/user-dto";
import { UserRepository } from "../domain/user-repository";
import { UserValue } from '../domain/user-value';
import { NotFoundError, ValidationError } from '../../shared/errors';
import { generateJWT } from '../../helpers/generate-jwt';

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    public register = async (newUser: CreateUserDto) => {

        const userValue = new UserValue(newUser)

        const user = await this.userRepository.create(userValue)

        const token = await generateJWT(user!.uid)

        return {
            uid: user!.uid,
            name: user!.name,
            email: user!.email,
            token
        }
    }

    public login = async ({ email, password }: LoginUserDto) => {

        const user = await this.userRepository.findByEmail(email)

        if (!user) throw new NotFoundError("User not exist");

        const validatePassword = bcryptjs.compareSync(password, user.password)

        if (!validatePassword) throw new ValidationError("Bad credentials - password");

        const token = await generateJWT(user.uid)

        return {
            uid: user.uid,
            name: user.name,
            email: user.email,
            token
        }
    }

    public findByUid = async (uid: string) => {
        const user = await this.userRepository.findByUid(uid)

        if (!user) throw new NotFoundError("User not exist");

        return user

    }
}