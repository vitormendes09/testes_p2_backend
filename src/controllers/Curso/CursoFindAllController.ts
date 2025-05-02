import {Request, Response} from 'express';
import { ICursoFindAllController } from '../../contracts/controllers/Curso/ICursoFindAllController';
import { ICursoFindAllUseCase } from '../../contracts/usecase/Curso/ICursoFindAllUseCase';
import { ICurso } from '../../contracts/entities/ICurso';   
import { ICursoRepositoryFindAll } from '../../contracts/repositories/ICurso/ICursoFindAllRepository';

export class CursoFindAllController implements ICursoFindAllController {
    private cursoFindAllUseCase: ICursoFindAllUseCase<{ id: string }, ICurso[]>;
    private cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> | undefined;

    constructor(cursoFindAllUseCase: ICursoFindAllUseCase<{ id: string }, ICurso[]>, cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> | undefined) {
        this.cursoRepositoryFindAll = cursoRepositoryFindAll;
        this.cursoFindAllUseCase = cursoFindAllUseCase;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.body;
            if (!id) {
                res.status(400).json({ error: "ID is required" });
                return;
            }
            const cursos = await this.cursoFindAllUseCase.perform({ id });
            if (!cursos || cursos.length === 0) {
                res.status(404).json({ error: "Curso not found" });
                return;
            }
            res.status(200).json(cursos);
        } catch (error) {
            console.error("Error in CursoFindNomeController:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}