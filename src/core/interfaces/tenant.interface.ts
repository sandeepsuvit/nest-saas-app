import { Document } from 'mongoose';

/**
 * Tenant interface document
 *
 * @export
 * @interface Organization
 * @extends {Document}
 */
export interface ITenant extends Document {
    // Fields
    readonly _id: string;
    readonly name: string;
    readonly uri: string;
    // Methods
}
