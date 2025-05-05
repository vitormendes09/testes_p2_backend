import { IUserRegisterController } from "../../../contracts/controllers/User/IUserRegisteController";
import { UserRegisterController } from "../../../controllers/User/UserRegisterController";
import { IUserRegisterUseCase } from "../../../contracts/usecase/User/IUserRegisterUseCase";
import { UserRegisterUseCase } from "../../../domain/usecase/User/UserRegisterUseCase";
import { IUserRepositoryRegister } from "../../../contracts/repositories/IUser/IUserRepositoryRegister";
import { UserRepositoryRegister } from "../../../data/repository/User/UserRepositoryRegister";
import { IUser } from "../../../contracts/entities/IUser";
import connectDB from "../../../data/config/database";
import { UserModel } from "../../../data/models/User";

export async function UserRegisterFactory() {

    try {
        await connectDB();
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
        throw err;
    }
    const userRepository: IUserRepositoryRegister<IUser> = new UserRepositoryRegister(UserModel);
    const userUseCase: IUserRegisterUseCase = new UserRegisterUseCase(userRepository);
    const userController: IUserRegisterController = new UserRegisterController(userUseCase);
    return userController;
}
