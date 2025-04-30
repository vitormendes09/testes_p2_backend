export interface ICursoFindAllUseCase<Entrada, Saida> {
    perform(entrada: Entrada): Promise<Saida>;
}