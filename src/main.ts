import * as dotenv from 'dotenv';
import dotenvExpand = require('dotenv-expand');

// Enables use of variables in env files
dotenvExpand(dotenv.config()); // Should always be at the top of base nest app imports

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import wildCardSubdomain = require('wildcard-subdomains');
import { swaggerSetup } from './swagger.setup';
import { swaggerTenantSetup } from './swagger-tenant.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add additional configurations here
  app.use(wildCardSubdomain({
    // Identifier for holding subdomain id
    namespace: '@tenant',
    // These subdomains would be ignored
    whitelist: ['www', 'app'],
  }));

  // Swagger configuration
  swaggerSetup(app);

  // Swagger configuration for tenants
  swaggerTenantSetup(app);

  await app.listen(3000);
}

bootstrap();
