import { Schema } from 'mongoose';

// User schema definition
export const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String, required: true, trim: true, unique: true,
        lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true,
    },
    // organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
    // Audit logs
    createdBy: Schema.Types.ObjectId,
    updatedBy: Schema.Types.ObjectId,
}, {
    id: false, // Remove id from the data returned in virtuals
    versionKey: false,
    timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' },
});


// ========================================================================== //
//                          CUSTOM SCHEMA FUNCTIONS                           //
// ========================================================================== //
