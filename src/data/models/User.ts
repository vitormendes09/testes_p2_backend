import mongoose from 'mongoose';
import { IUser } from '../../contracts/entities/IUser';

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>('User', userSchema);