import { ICursoFindAllUseCase } from "../../../contracts/usecase/Curso/ICursoFindAllUseCase";
import { ICursoRepositoryFindAll } from "../../../contracts/repositories/ICurso/ICursoFindAllRepository";
import { ICurso } from "../../../contracts/entities/ICurso";
import { ICursoFindAllController } from "../../../contracts/controllers/Curso/ICursoFindAllController";
import { CursoFindAllController } from "../../../controllers/Curso/CursoFindAllController";
import { CursofindAllUseCase } from "../../../domain/usecase/Curso/CursoFindAllUseCase";
import { CursoFindAllRepository } from "../../../data/repository/Curso/CursoFindAllrepository";
import { CursoModel } from "../../../data/models/Curso";
import connectDB from "../../../data/config/database";


export async function CursoFindAllFactory(){
    try {
        await connectDB();
    } catch (err) {
        console.error("Erro ao conectar ao banco:", err);
        throw err;
    }
    const cursoRepositoryFindAll: ICursoRepositoryFindAll<ICurso> = new CursoFindAllRepository(CursoModel);
    const cursoUsecase: ICursoFindAllUseCase = new CursofindAllUseCase(cursoRepositoryFindAll);
    const cursoController: ICursoFindAllController = new CursoFindAllController(cursoUsecase);
    return cursoController;
    
}







