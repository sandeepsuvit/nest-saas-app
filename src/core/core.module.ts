import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantSchema } from './schema/tenant.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Tenant', schema: TenantSchema },
        ])
    ],
    exports: [
        MongooseModule,
    ]
})
export class CoreModule {}
