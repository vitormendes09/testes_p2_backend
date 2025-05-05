import { IUserLoginUseCase } from "../../../contracts/usecase/User/IUserLoginuseCase";
import { UserLoginUseCase } from "../../../domain/usecase/User/UserLoginUseCase";
import { IUserControllerLogin } from "../../../contracts/controllers/User/IUserLoginController";
import { UserLoginController } from "../../../controllers/User/UserLogincontroller";
import { IUserRepositoryFind } from "../../../contracts/repositories/IUser/IUserRepositoryFind";
import {UserRepositoryFindBy} from "../../../data/repository/User/UserRepositoryFind"
import { IUser } from "../../../contracts/entities/IUser";
import connectDB from "../../../data/config/database";
import {UserModel} from "../../../data/models/User"

export async function UserLoginfactory(){
    await connectDB();
    const userRepository: IUserRepositoryFind<IUser> = new UserRepositoryFindBy(UserModel)
    const userUseCase: IUserLoginUseCase = new UserLoginUseCase(userRepository);
    const userController: IUserControllerLogin = new UserLoginController(userUseCase);
    return userController;
}