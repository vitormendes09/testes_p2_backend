import { ICurso } from "../../../contracts/entities/ICurso"
export interface ICursoFindAllUseCase {
    perform(): Promise<ICurso[]>;
}