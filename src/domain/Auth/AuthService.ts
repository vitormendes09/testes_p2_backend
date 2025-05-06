import jwt from 'jsonwebtoken';
import { IUser } from '../../contracts/entities/IUser';

const SECRET = process.env.JWT as string;

export class AuthService {
    static generateToken(user: IUser): string {
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
        };
        return jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: "1d",
          });
    }

    static verifyToken(token: string): IUser | null {
        try {
            const decoded = jwt.verify(token, SECRET);
            return decoded as IUser;
        } catch (error) {
            return null;
        }
    }
}