import { ICursoFindAllUseCase } from "../../../contracts/usecase/Curso/ICursoFindAllUseCase";
import { ICursoRepositoryFindAll } from "../../../contracts/repositories/ICurso/ICursoFindAllRepository";
import { ICurso } from "../../../contracts/entities/ICurso"

export interface Entrada {
    id: string | undefined,
}

export interface Saida {
    id: string | undefined,
    nomeCurso: string, 
    disciplinas: string[]
}

export class CursofindAllUseCase implements ICursoFindAllUseCase<Entrada, Saida> {
    private cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> | undefined;

    constructor(cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> | undefined) {
        this.cursoRepositoryFindAll = cursoRepositoryFindAll;
    }

    async perform(entrada: Entrada): Promise<Saida> {
        if (!entrada.id) {
            throw new Error("ID is required");
        }

        if (!this.cursoRepositoryFindAll) {
            throw new Error("Curso repository not initialized");
        }

        const cursos = await this.cursoRepositoryFindAll.findAll();
        if (!cursos || cursos.length === 0) {
            throw new Error("Curso not found");
        }

        const curso = cursos[0]; 
        if (curso.id !== entrada.id) {
            throw new Error("Curso not found");
        }   
        const saida: Saida = {
            id: curso.id,
            nomeCurso: curso.nomeCurso,
            disciplinas: curso.disciplinas,
        };

        return saida;
    }
    
}