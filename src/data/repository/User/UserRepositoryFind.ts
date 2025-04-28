import { IUser } from "../../../contracts/entities/IUser";
import { Model } from "mongoose";
import { IUserRepositoryFind} from "../../../contracts/repositories/IUser/IUserRepositoryFind";

export class UserRepositoryFindBy implements IUserRepositoryFind<IUser>{
    constructor(private userModel: Model<IUser>){
        userModel: Model<IUser>

    }
    
    findById(id: string): Promise<IUser | null> {
        return this.userModel.findById(id).exec();
    }
    findByEmail(email: string): unknown {
        return this.userModel.findOne({ email }).exec();
    }
    
} 