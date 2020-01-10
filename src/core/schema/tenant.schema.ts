import { Schema } from 'mongoose';

// Account schema definition
export const TenantSchema = new Schema({
    name: { type: String, required: true },
    uri: { type: String, required: true },
}, {
    id: false, // Remove id from the data returned in virtuals
    versionKey: false,
    timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' },
});