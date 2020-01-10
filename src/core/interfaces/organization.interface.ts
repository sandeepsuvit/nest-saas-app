import { Document } from 'mongoose';

/**
 * User organization interface document
 *
 * @export
 * @interface Organization
 * @extends {Document}
 */
export interface IOrganization extends Document {
    // Fields
    readonly _id: string;
    readonly name: string;
    // Methods
}
