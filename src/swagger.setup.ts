import { INestApplication } from '@nestjs/common';
import { SwaggerCustomOptions, SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Configuration for Swagger
 *
 * @export
 * @param {INestApplication} app
 */
export function swaggerSetup(app: INestApplication) {
    // Swagger configuration
    const options = new DocumentBuilder()
        .setTitle(process.env.API_DOC_TITLE)
        .setDescription(process.env.API_DOC_DESC)
        .setVersion(process.env.VERSION)
        .setBasePath('/')
        // Register all controller tags heres
        .addTag('tenants', 'Tenant management endpoint')
        .addTag('users', 'User management endpoint')
        .build();

    // Custom swagger options
    const customOptions: SwaggerCustomOptions = {
        customSiteTitle: `${process.env.API_DOC_TITLE} Documentation`,
    };

    const document = SwaggerModule.createDocument(app, options);
    // Setup swagger endpoint
    SwaggerModule.setup('apidoc', app, document, customOptions);
}
