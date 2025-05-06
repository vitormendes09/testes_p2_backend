import { ICursoFindAllUseCase } from "../../../contracts/usecase/Curso/ICursoFindAllUseCase";
import { ICursoRepositoryFindAll } from "../../../contracts/repositories/ICurso/ICursoFindAllRepository";
import { ICurso } from "../../../contracts/entities/ICurso"

export interface Entrada {
    id: string | undefined,
}

export interface Saida {
    [x: string]: any;
    id: string | undefined,
    nomeCurso: string, 
    disciplinas: string[]
}

export class CursofindAllUseCase implements ICursoFindAllUseCase{
    private cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> | undefined;

    constructor(cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> | undefined) {
        this.cursoRepositoryFindAll = cursoRepositoryFindAll;
    }

    async perform(): Promise<ICurso[]> {
        if (!this.cursoRepositoryFindAll) {
            throw new Error("Curso repository not initialized");
        }

        const cursos = await this.cursoRepositoryFindAll.findAll();
        return cursos;

    }
    
}