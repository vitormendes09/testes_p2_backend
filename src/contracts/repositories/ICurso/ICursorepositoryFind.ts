export interface IcursoRepositoryFind<T>{
    findById(id: string): Promise<T | null>;
    findByNomeCurso(nomeCurso: string): Promise<T | null>;
    findAll(): Promise<T[]>;
}