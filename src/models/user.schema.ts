import { model, Schema } from 'mongoose';
import { Document } from 'mongoose';

export interface User extends Document {
    firstName?: string;
    lastName?: string;
    handle?: string;
    avatar?: string;
    email: string;
    hashPassword: string;
    oauthProvider?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type CreateUserInput = Pick<
    User,
    'firstName' | 'lastName' | 'avatar' | 'email' | 'oauthProvider'
> & {
    password: string;
};

const userSchema = new Schema<User>(
    {
        firstName: { type: String },
        lastName: { type: String },
        handle: { type: String },
        avatar: { type: String },
        email: { type: String, required: true, unique: true },
        hashPassword: { type: String, required: true },
        oauthProvider: { type: String },
    },
    { timestamps: true }
);

export default model('User', userSchema);
