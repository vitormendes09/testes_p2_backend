import {Request, Response } from "express"

export interface ICursoFindAllController{
    handle(req: Request, resp: Response): Promise<void>;
}