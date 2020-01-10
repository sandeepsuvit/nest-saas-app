import { Module } from '@nestjs/common';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [
    CoreModule,
  ],
  controllers: [TenantsController],
  providers: [TenantsService]
})
export class TenantsModule {}
