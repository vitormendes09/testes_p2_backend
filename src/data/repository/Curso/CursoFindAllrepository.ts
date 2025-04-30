import { ICurso } from "../../../contracts/entities/ICurso";
import {Model} from "mongoose";
import { ICursoRepositoryFindAll } from "../../../contracts/repositories/ICurso/ICursoFindAllRepository"


export class CursoFindAllRepository implements ICursoRepositoryFindAll<ICurso>{
    constructor(private cursoModel: Model<ICurso>){}
   
    findAll(): Promise<ICurso[]> {
        return this.cursoModel.find().exec();
    }
    
}