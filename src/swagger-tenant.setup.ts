import { INestApplication } from '@nestjs/common';
import { SwaggerCustomOptions, SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';

/**
 * Configuration for Swagger
 *
 * @export
 * @param {INestApplication} app
 */
export function swaggerTenantSetup(app: INestApplication) {
    // Swagger configuration
    const options = new DocumentBuilder()
        .setTitle(process.env.API_DOC_TITLE)
        .setDescription(process.env.API_DOC_DESC)
        .setVersion(process.env.VERSION)
        .setBasePath('/')
        // Register all controller tags heres
        .addTag('users', 'User management endpoint')
        .build();

    // Custom swagger options
    const customOptions: SwaggerCustomOptions = {
        customSiteTitle: `${process.env.API_DOC_TITLE} Documentation`,
    };

    const document = SwaggerModule.createDocument(app, options, {
        include: [UsersModule],
    });
    // Setup swagger endpoint
    SwaggerModule.setup('apidoc', app, document, customOptions);
}
