import * as dotenv from 'dotenv';
import dotenvExpand = require('dotenv-expand');

// Enables use of variables in env files
dotenvExpand(dotenv.config()); // Should always be at the top of base nest app imports

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { swaggerSetup } from './swagger/swagger.setup';
import { swaggerTenantSetup } from './swagger/swagger-tenant.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add additional configurations here

  // Swagger configuration
  swaggerSetup(app);
  swaggerTenantSetup(app);

  await app.listen(3000);
}

bootstrap();
