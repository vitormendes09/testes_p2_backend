export interface IUserRepositoryFind<T> {
    findById(id: string): Promise<T | null>;
    findByEmail(email: string): unknown;
}