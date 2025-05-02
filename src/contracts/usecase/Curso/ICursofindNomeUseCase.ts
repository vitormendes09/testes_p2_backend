import {ICurso} from "../../../contracts/entities/ICurso";
export interface ICursoFindNomeUseCase {
    perform(id: string, nome: string): Promise<ICurso[]>;
}