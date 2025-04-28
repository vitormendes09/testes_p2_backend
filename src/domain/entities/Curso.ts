import { ICurso } from "../../contracts/entities/ICurso";

export class Curso implements ICurso {
    id: string | undefined;
    nomeCurso: string;
    disciplinas: string[];

    constructor(id: string, nomeCurso: string, disciplinas: string[]) {
        this.id = id;
        this.nomeCurso = nomeCurso;
        this.disciplinas = disciplinas;
    }
}