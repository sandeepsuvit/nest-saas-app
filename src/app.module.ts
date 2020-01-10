import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { CoreModule } from './core/core.module';
import { TenantsModule } from './tenants/tenants.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Database configuration
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.DATABASE_URL, ...databaseConfig }),
    }),
    CoreModule,
    UsersModule,
    TenantsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
