import { Router } from "express";
import { CursoFindNomeFactory } from "../../factory/Curso/CursoFindNomeFactory";

async function CursoFindNomeRouter(){
    const router = Router();
    const curso = await CursoFindNomeFactory();

    router.get("/curso/findnome", async (req, res) => {
        try {
            await curso.handle(req, res);
        } catch (error) {
            console.error("Error in CursoFindNomeRouter:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    return router;
}

export default CursoFindNomeRouter;