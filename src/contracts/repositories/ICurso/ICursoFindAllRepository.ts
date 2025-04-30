export interface ICursoRepositoryFindAll<T>{
    findAll(): Promise<T[]>;
}