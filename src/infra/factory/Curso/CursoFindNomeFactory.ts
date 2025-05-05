
import { ICurso } from "../../../contracts/entities/ICurso";
import connectDB from "../../../data/config/database";
import {CursoModel} from "../../../data/models/Curso"
import { ICursoFindNomeUseCase } from "../../../contracts/usecase/Curso/ICursofindNomeUseCase";
import { CursofindNomeUseCase } from "../../../domain/usecase/Curso/CursoFindNomeUseCase";
import { ICursoFindNomeController } from "../../../contracts/controllers/Curso/ICursoFindNomeController";
import { CursoFindNomeController } from "../../../controllers/Curso/CursoFindNomeController";
import { ICursoRepositoryFindNome } from "../../../contracts/repositories/ICurso/ICursoFindNomerepository";
import{CursoFindNomeRepository} from "../../../data/repository/Curso/CursoFindNomeRepository"

export async function CursoFindNomeFactory() {
    await connectDB();
    const cursorepository: ICursoRepositoryFindNome<ICurso> = new CursoFindNomeRepository(CursoModel);
    const cursousecase: ICursoFindNomeUseCase = new CursofindNomeUseCase(cursorepository);
    const cursocontroller: ICursoFindNomeController = new CursoFindNomeController(cursousecase);
    return cursocontroller;
}