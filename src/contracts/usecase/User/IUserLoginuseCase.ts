export interface IUserLoginUseCase<Entrada,Saida>{
    perform(email: string, password: string): Promise<Saida>
}