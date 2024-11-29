import { model, ObjectId, Schema } from 'mongoose';

export interface UserProfile {
    userId: ObjectId;
    bio: string;
    skills: string[];
    socialLinks: {
        github: string;
        linkedin: string;
    };
    friends: string[];
    followers: string[];
    followings: string[];
    pendingRequests: string[];
}

const userProfileSchema = new Schema<UserProfile>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        bio: { type: String },
        skills: { type: [String], default: [] },
        socialLinks: {
            github: { type: String },
            linkedin: { type: String },
        },
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        followings: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        pendingRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true }
);

export default model('UserProfile', userProfileSchema);
