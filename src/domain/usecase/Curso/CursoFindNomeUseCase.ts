import { ICursoFindNomeUseCase } from "../../../contracts/usecase/Curso/ICursofindNomeUseCase";
import { ICursoRepositoryFindNome } from "../../../contracts/repositories/ICurso/ICursoFindNomerepository";
import { ICurso } from "../../../contracts/entities/ICurso"

export interface Entrada {
    id: string;
    nomeCurso: string;
    disciplinas: string[];
}

export interface Saida {
    sucesso: boolean;
    mensagem: string;
}

export class CursofindNomeUseCase implements ICursoFindNomeUseCase{
    private cursoRepositoryFindNome: ICursoRepositoryFindNome<ICurso> | undefined;

    constructor(cursoRepositoryFindNome: ICursoRepositoryFindNome<ICurso> | undefined) {
        this.cursoRepositoryFindNome = cursoRepositoryFindNome;
    }

    async perform(id: string, nome: string): Promise<ICurso[]> {
        if (!id) {
            throw new Error ("ID is required");
        }

        if (!nome) {
            throw new Error("Curso repository not initialized");
        }

        return this.cursoRepositoryFindNome?.findByNomeCurso(nome, id) || [];
        
    }
    
}