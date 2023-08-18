import { v4 as uuid } from "uuid";
import { UserEntity } from "./user-entity";



export class UserValue implements UserEntity {
    uid: string;
    name: string;
    email: string;
    password: string;
    imagen: string;

    constructor({
        name, email, password,
        imagen
    }: {
        name: string,
        email: string,
        password: string,
        imagen?: string,
    }) {
        this.uid = uuid();
        this.name = name;
        this.email = email;
        this.password = password
        this.imagen = imagen ?? ""
    }

}