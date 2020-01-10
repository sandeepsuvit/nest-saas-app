import { Connection } from 'mongoose';
import { UserSchema } from '../../core/schema/user.schema';

// List of model mappings in tenant database
export const TenantModelProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['TENANT_CONNECTION'],
    },
]