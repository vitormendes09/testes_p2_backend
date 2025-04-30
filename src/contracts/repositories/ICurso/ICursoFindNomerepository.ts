export interface ICursoRepositoryFindNome<T>{
    findByNomeCurso(nomeCurso: string): Promise<T | null>;
}