import {Entrada, Saida } from "../../../domain/usecase/User/UserRegisterUseCase";

export interface IUserRegisterUseCase{
    perform(entrada: Entrada): Promise<Saida>
}