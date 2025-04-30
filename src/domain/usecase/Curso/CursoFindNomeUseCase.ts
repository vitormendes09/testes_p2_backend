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

export class CursofindNomeUseCase implements ICursoFindNomeUseCase<Entrada, Saida> {
    private cursoRepositoryFindNome: ICursoRepositoryFindNome<ICurso> | undefined;

    constructor(cursoRepositoryFindNome: ICursoRepositoryFindNome<ICurso> | undefined) {
        this.cursoRepositoryFindNome = cursoRepositoryFindNome;
    }

    async perform(entrada: Entrada): Promise<Saida> {
        if (!entrada.id) {
            throw new Error("ID is required");
        }

        if (!this.cursoRepositoryFindNome) {
            throw new Error("Curso repository not initialized");
        }

     

        const curso = await this.cursoRepositoryFindNome.findByNomeCurso(entrada.nomeCurso);
        if (!curso) {
            return { sucesso: false, mensagem: "Curso not found" };
        }
        return { sucesso: true, mensagem: "Curso found successfully" };
    }
    
}