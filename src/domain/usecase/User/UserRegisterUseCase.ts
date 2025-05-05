import { IUserRepositoryRegister } from "../../../contracts/repositories/IUser/IUserRepositoryRegister";
import { IUserRegisterUseCase } from "../../../contracts/usecase/User/IUserRegisterUseCase";
import { IUser } from "../../../contracts/entities/IUser";
import bcrypt from "bcrypt"
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
export class UserRegisterUseCase implements IUserRegisterUseCase {
    private userRepositoryRegister: IUserRepositoryRegister<IUser>

    constructor (userRepositoryRegister: IUserRepositoryRegister<IUser>){
        this.userRepositoryRegister = userRepositoryRegister;
    }
   async perform(entrada: Entrada): Promise<Saida> {
       const { name, email, password } = entrada;

      
      if(!name || !email || !password){ 
        return { success: false, message: "All fields are required."}
      }
      if (name.length < 4) {
        return { success: false, message: "Name must have at least 4 characters." };
    }
    if (password.length < 5) {
        return { success: false, message: "Password must have at least 5 characters." };
    }

    console.log("Verificando o e-mail: ", email);
    const existingUser = await this.userRepositoryRegister.findByEmail(email);

    if(existingUser){
        return {success: false, message: "Email already registered."}
    }

     // Criptografar a senha
     const hashedPassword = await bcrypt.hash(password, 10);

     const newUser: IUser = { name, email, password: hashedPassword };
     const id = Date.now().toString();
     await this.userRepositoryRegister.registerUser(id, newUser);
     console.log("Salvando usuário no banco:", newUser);
     const savedUser = { id, ...newUser };

    
        // Gerar token
        const token = AuthService.generateToken(savedUser);

        return {
            success: true,
            message: "User registered successfully.",
            user: savedUser,
            token: token
        }
   } 
    
}