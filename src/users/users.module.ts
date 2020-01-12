import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TenantModelProviders } from '../tenants/providers/tenant-model.provider';
import { TenantsModule } from '../tenants/tenants.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    CoreModule,
    TenantsModule,
  ],
  providers: [
    UsersService,
    ...TenantModelProviders,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
