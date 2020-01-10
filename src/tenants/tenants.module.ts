import { Module, Scope } from '@nestjs/common';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';
import { CoreModule } from '../core/core.module';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { TenantConnectionProviders } from './providers/tenant-connection.providers';

const connectionFactory = {
  provide: 'TENANT',
  scope: Scope.REQUEST,
  inject: [REQUEST],
  useFactory: (req: Request) => {
    // console.log(req.headers.host.split(".")[0]);
    return req.params;
  },
};

@Module({
  imports: [
    CoreModule,
  ],
  controllers: [TenantsController],
  providers: [
    TenantsService,
    connectionFactory,
    ...TenantConnectionProviders
  ],
  exports: ['TENANT', ...TenantConnectionProviders],
})
export class TenantsModule {}
