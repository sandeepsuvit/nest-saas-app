import { Schema } from 'mongoose';

// Account schema definition
export const OrganizationSchema = new Schema({
    name: { type: String, required: true }
});
