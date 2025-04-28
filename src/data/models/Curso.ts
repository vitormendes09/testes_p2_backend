import mongoose from "mongoose";
import { ICurso } from "../../contracts/entities/ICurso";


const cursoSchema = new mongoose.Schema<ICurso>({
    nomeCurso: { type: String, required: true },
    disciplinas: { type: [String], required: true },
});

export const CursoModel = mongoose.model<ICurso>("Curso", cursoSchema);