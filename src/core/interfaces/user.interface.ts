import { Document } from 'mongoose';

/**
 * User interface document
 *
 * @export
 * @interface User
 * @extends {Document}
 */
export interface IUser extends Document {
    // Fields
    readonly _id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
}
