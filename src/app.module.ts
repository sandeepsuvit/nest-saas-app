import { Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { Request } from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { TenantsModule } from './tenants/tenants.module';

const connectionFactory = {
  provide: 'TENANT',
  scope: Scope.REQUEST,
  inject: [REQUEST],
  useFactory: (req: Request) => {
    return req.params;
  },
};

@Module({
  imports: [
    // Database configuration
    // MongooseModule.forRoot(process.env.DATABASE_URL, databaseConfig),
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
    connectionFactory
  ],
  exports: ['TENANT'],
})
export class AppModule {}
