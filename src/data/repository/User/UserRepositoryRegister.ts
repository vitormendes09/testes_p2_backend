import { IUser } from "../../../contracts/entities/IUser";
import { Model } from "mongoose";
import { IUserRepositoryRegister } from "../../../contracts/repositories/IUser/IUserRepositoryRegister";

export class UserRepositoryRegister implements IUserRepositoryRegister<IUser> {
    constructor(private userModel: Model<IUser>){
        userModel: Model<IUser>
    }
    
    registerUser(id: string, user: IUser): Promise<void> {
        return this.userModel.create(user).then(() => {});
    }
    findByEmail(email: string): unknown {
        return this.userModel.findOne({ email }).exec();
    }
    
}