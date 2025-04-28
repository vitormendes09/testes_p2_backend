import {IUser } from '../../contracts/entities/IUser';

export class User implements IUser {
    id: string | undefined;
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string, id?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}