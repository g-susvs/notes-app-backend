import bcryptjs from 'bcryptjs';
import { UserEntity } from "../../domain/user-entity";
import { UserRepository } from "../../domain/user-repository";
import UserSchema from "./user-schema";

export class MongoUserRepository implements UserRepository {

    async findByUid(uid: string) {
        const user = await UserSchema.findOne<UserEntity>({ uid })

        return user
    }


    async findByEmail(email: string) {

        const user = await UserSchema.findOne<UserEntity>({ email })

        return user
    }

    async create(newUser: UserEntity) {
        const user = await UserSchema.create(newUser)

        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(user.password, salt);

        await user.save()

        return user as unknown as UserEntity
    }

}