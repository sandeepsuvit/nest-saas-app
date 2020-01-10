import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [
    CoreModule,
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
