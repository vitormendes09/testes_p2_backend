import {Router} from 'express';
import { UserRegisterFactory } from '../../factory/User/UserRegisterFaqctoryts';

async function UserRegisterRouter() {
    const router = Router();
    const user = await UserRegisterFactory();

    router.post('/user/register', async (req, res) => {

        console.log("🔔 Rota /register chamada");
        console.log("Dados recebidos:", req.body);
        try {
            await user.handle(req, res);
        } catch (error: any) {
            console.error('Error in UserRegisterRouter:', error.message, error.stack);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    return router;
}

export default UserRegisterRouter;