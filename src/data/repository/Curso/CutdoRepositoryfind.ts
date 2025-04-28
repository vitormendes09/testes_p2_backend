import { ICurso } from "../../../contracts/entities/ICurso";
import mongoose, {Model} from "mongoose";
import { IcursoRepositoryFind } from "../../../contracts/repositories/ICurso/ICursoRepositoryFind";


export class CursoRepositoryFind implements IcursoRepositoryFind<ICurso>{
    constructor(private cursoModel: Model<ICurso>){}
    findById(id: string): Promise<ICurso | null> {
      return this.cursoModel.findById(id).exec();
    }
    findByNomeCurso(nomeCurso: string): Promise<ICurso | null> {
       return this.cursoModel.findOne({ nomeCurso: nomeCurso }).exec()
    }
    findAll(): Promise<ICurso[]> {
        return this.cursoModel.find().exec();
    }
    
}