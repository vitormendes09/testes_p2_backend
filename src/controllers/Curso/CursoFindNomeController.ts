import {Request, Response} from 'express';
import { ICursoFindNomeController } from '../../contracts/controllers/Curso/ICursoFindNomeController';
import{ICursoFindNomeUseCase} from '../../contracts/usecase/Curso/ICursofindNomeUseCase';
import { ICurso } from '../../contracts/entities/ICurso';
import { ICursoRepositoryFindNome } from '../../contracts/repositories/ICurso/ICursoFindNomerepository';

export class CursoFindNomeController implements ICursoFindNomeController {
    private cursoFindNomeUseCase: ICursoFindNomeUseCase
  
    constructor(cursoFindNomeUseCase: ICursoFindNomeUseCase) {
       
        this.cursoFindNomeUseCase = cursoFindNomeUseCase;
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try{
            const { nome} = req.query;
            if ( !nome) {
                return res.status(400).json({ error: "Nome do curso é obrigatório" });
            }
            const cursos = await this.cursoFindNomeUseCase.perform( String(nome));
            if (!cursos || cursos.length === 0) {
                return res.status(404).json({ error: "Curso not found" });
            }
            return res.status(200).json(cursos);
        } catch (error) {
            console.error("Error in CursoFindNomeController:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}