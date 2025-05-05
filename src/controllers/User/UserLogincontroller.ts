import {Request, Response} from 'express';
import { IUserControllerLogin } from '../../contracts/controllers/User/IUserLoginController';
import {z} from 'zod';
import { IUserLoginUseCase } from '../../contracts/usecase/User/IUserLoginuseCase';


export class UserLoginController implements IUserControllerLogin {
    private userLoginUseCase: IUserLoginUseCase;

    constructor(userLoginUseCase: IUserLoginUseCase) {
        this.userLoginUseCase = userLoginUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(6)
            });

            const { email, password } = schema.parse(req.body);

            const result = await this.userLoginUseCase.perform(email, password);

            if (result.success) {
                return res.status(200).json(result);
            } else {
                return res.status(401).json({ message: result.message });
            }
        } catch (error) {
            console.error("Error in UserLoginController:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}