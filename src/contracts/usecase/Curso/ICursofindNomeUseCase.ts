export interface ICursoFindNomeUseCase<Entrada, Saida> {
    perform(entrada: Entrada): Promise<Saida>;
}