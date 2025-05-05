import {Router } from "express";
import { UserLoginfactory } from "../../factory/User/UserLoginFactory";


async function UserLoginRouter(){
    const router = Router();
    const user = await UserLoginfactory();

    router.post("/user/login", async (req, res) => {
        try {
            await user.handle(req, res);
        } catch (error) {
            console.error("Error in UserLoginRouter:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    return router;
}
export default UserLoginRouter;