import { Saida } from "../../../domain/usecase/User/UserLoginUseCase"

export interface IUserLoginUseCase{
    perform(email: string, password: string): Promise<Saida>
}