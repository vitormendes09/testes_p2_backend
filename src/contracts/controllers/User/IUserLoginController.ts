import { Request, Response } from "express";

export interface IUserControllerRegister{
    handle(req: Request, resp: Response): Promise<Response>
} 