export interface IUserRepositoryRegister<T> {
    registerUser(id: string, user: T): Promise<void>;
    findByEmail(email: string): unknown;
}