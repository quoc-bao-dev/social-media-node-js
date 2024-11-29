import { model, Schema } from 'mongoose';

const refreshTokenSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true },
    expiresAt: { type: Date, required: true },
});

export default model('RefreshToken', refreshTokenSchema);
