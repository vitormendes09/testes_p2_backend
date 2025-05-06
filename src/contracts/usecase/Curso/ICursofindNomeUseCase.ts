import {ICurso} from "../../../contracts/entities/ICurso";
export interface ICursoFindNomeUseCase {
    perform(nome: string): Promise<ICurso[]>;
}