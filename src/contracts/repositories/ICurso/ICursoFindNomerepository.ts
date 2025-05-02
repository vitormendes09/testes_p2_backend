export interface ICursoRepositoryFindNome<T>{
    findByNomeCurso(nomeCurso: string, id: string): Promise<T []>;
}