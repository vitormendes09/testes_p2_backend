import {Request, Response } from "express"

export interface ICursoFindNomeController{
    handle(req: Request, resp: Response): Promise<void>;
}