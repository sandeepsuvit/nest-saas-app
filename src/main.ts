import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import wildCardSubdomain = require('wildcard-subdomains');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add additional configurations here
  app.use(wildCardSubdomain({
    // Identifier for holding subdomain id
    namespace: '@tenant',
    // These subdomains would be ignored
    whitelist: ['www', 'app'],
  }));

  await app.listen(3000);
}

bootstrap();
