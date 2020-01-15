import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { TenantsModule } from './tenants/tenants.module';
import { UsersModule } from './users/users.module';
import configuration from './config';

@Module({
  imports: [
    // Load the default configuration file
    ConfigModule.forRoot({
      // envFilePath: 'src/environments/.development.env',
      load: configuration,
      isGlobal: true,
    }),
    // Mongoose default connection
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService],
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
