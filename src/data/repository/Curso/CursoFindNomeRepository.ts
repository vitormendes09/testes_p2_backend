import { ICurso } from "../../../contracts/entities/ICurso";
import {Model} from "mongoose";
import { ICursoRepositoryFindNome } from "../../../contracts/repositories/ICurso/ICursoFindNomerepository";


export class CursoFindNomeRepository implements ICursoRepositoryFindNome<ICurso>{
    constructor(private cursoModel: Model<ICurso>){}
   
    findByNomeCurso(nomeCurso: string): Promise<ICurso[]> {
       return this.cursoModel.find({ nomeCurso: nomeCurso}).exec();
    }
   
}