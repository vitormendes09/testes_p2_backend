import { Request, Response } from "express";

export interface IUserControllerLogin {
    handle(req: Request, resp: Response): Promise<Response>
} 