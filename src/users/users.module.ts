import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TenantAwareMiddleware } from '../tenants/middlewares/tenant-aware.middleware';
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
export class UsersModule implements NestModule {
  configure(context: MiddlewareConsumer) {
    context.apply(TenantAwareMiddleware).forRoutes('/users');
  }
}
