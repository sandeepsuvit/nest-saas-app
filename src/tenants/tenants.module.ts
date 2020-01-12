import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TenantConnection } from './providers/tenant-connection';
import { TenantConnectionFactory } from './providers/tenant-connection.factory';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';

@Module({
  imports: [
    CoreModule,
  ],
  controllers: [TenantsController],
  providers: [
    TenantsService,
    TenantConnection,
    ...TenantConnectionFactory,
  ],
  exports: [
    ...TenantConnectionFactory,
  ],
})
export class TenantsModule {}
