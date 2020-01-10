import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ITenantContext } from './core/interfaces/tenant-context.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Get the details of the tenant
   *
   * @param {ITenantContext} tenant
   * @returns {string}
   * @memberof AppController
   */
  @Get('/@tenant/:id')
  getHelloSubdomain(@Param() tenant: ITenantContext): string {
    return this.appService.getSubdomainDetails(tenant);
  }

  /**
   * Get a default message for the tenant
   *
   * @param {ITenantContext} tenant
   * @returns {string}
   * @memberof AppController
   */
  @Get('/@tenant/:id/message')
  getHelloSubdomainMessage(@Param() tenant: ITenantContext): string {
    return `This is a message for the teants alone`;
  }
}
