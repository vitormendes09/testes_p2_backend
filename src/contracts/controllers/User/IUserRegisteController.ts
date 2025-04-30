import { Request, Response } from "express";

export interface IUserRegisterController{
    handle(req: Request, resp: Response): Promise<Response>
}