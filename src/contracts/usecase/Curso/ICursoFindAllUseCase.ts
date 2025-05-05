import { Entrada, Saida } from "../../../domain/usecase/Curso/CursoFindAllUseCase";

export interface ICursoFindAllUseCase {
    perform(entrada: Entrada): Promise<Saida>;
}