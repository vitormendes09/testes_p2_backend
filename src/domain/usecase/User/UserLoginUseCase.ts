import { IUserRepositoryFind } from "../../../contracts/repositories/IUser/IUserRepositoryFind";
import { IUser } from "../../../contracts/entities/IUser";
import { IUserLoginUseCase } from "../../../contracts/usecase/User/IUserLoginuseCase";
import bcrypt from "bcrypt";
import { AuthService } from "../../Auth/AuthService";

export interface Entrada {
    name: string; 
    email: string;
    password: string
}

export interface Saida{ 
    success: boolean;
    message: string;
    user?: IUser| null;
    token? : string;
}

export class UserLoginUseCase implements IUserLoginUseCase<Entrada, Saida> {

    private userRepositoryFind: IUserRepositoryFind<IUser>
    constructor( userRepositoryFind: IUserRepositoryFind<IUser>){
        this.userRepositoryFind = userRepositoryFind;
    }
    async perform(email: string, password:string): Promise<Saida> {
        if (!password) {
            return Promise.resolve({
                success: false,
                message: "Password is required"
            });
        }

        const user: IUser | null = await this.userRepositoryFind.findByEmail(email) as IUser | null;

        if (!user) {
            return {
                success: false,
                message: "User not found"
            };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return {
                success: false,
                message: "Invalid password"
            };
        }

        const token = AuthService.generateToken(user);
        return {
            success: true,
            message: "Login successful",
            user: user,
            token: token
        };
    }

   
    
}