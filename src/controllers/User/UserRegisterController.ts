import { Request, Response } from "express";
import  {IUserRegisterController} from "../../contracts/controllers/User/IUserRegisteController"
import { IUserRegisterUseCase } from "../../contracts/usecase/User/IUserRegisterUseCase";
import { z } from "zod";

export class UserRegisterController implements IUserRegisterController {
    private userRegisterUseCase: IUserRegisterUseCase<{ name: string, email: string, password: string }, { success: boolean, message: string, user?: any, token?: string }>;

    constructor(userRegisterUseCase: IUserRegisterUseCase<{ name: string, email: string, password: string }, { success: boolean, message: string, user?: any, token?: string }>) {
        this.userRegisterUseCase = userRegisterUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const schema = z.object({
                name: z.string().min(3),
                email: z.string().email(),
                password: z.string().min(6)
            });

            const { name, email, password } = schema.parse(req.body);

            const result = await this.userRegisterUseCase.perform({ name, email, password });

            if (result.success) {
                return res.status(201).json(result);
            } else {
                return res.status(400).json({ message: result.message });
            }
        } catch (error) {
            console.error("Error in UserRegisterController:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}