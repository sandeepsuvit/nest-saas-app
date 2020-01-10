import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ITenant } from './interfaces/tenant.interface';

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
   * @param {ITenant} tenant
   * @returns {string}
   * @memberof AppController
   */
  @Get('/@tenant/:id')
  getHelloSubdomain(@Param() tenant: ITenant): string {
    return this.appService.getSubdomainDetails(tenant);
  }

  /**
   * Get a default message for the tenant
   *
   * @param {ITenant} tenant
   * @returns {string}
   * @memberof AppController
   */
  @Get('/@tenant/:id/message')
  getHelloSubdomainMessage(@Param() tenant: ITenant): string {
    return `This is a message for the teants alone`;
  }
}
