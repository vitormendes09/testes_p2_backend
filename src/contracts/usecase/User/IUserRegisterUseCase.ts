export interface IUserRegisterUseCase<Entrada,Saida>{
    perform(entrada: Entrada): Promise<Saida>
}