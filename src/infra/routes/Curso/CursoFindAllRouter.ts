import {Router } from "express";
import { CursoFindAllFactory } from "../../factory/Curso/CursoFindAllfactory";

async function CursoFindAllRouter(){
    const router = Router();
    const curso = await CursoFindAllFactory();

    router.get("/curso/findall", async (req, res) => {
        try {
            await curso.handle(req, res);
        } catch (error) {
            console.error("Error in CursoFindAllRouter:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    return router;
}
export default CursoFindAllRouter;