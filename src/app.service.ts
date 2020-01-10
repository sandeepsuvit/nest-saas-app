import { Injectable, Inject } from '@nestjs/common';
import { ITenantContext } from './core/interfaces/tenant-context.interface';

@Injectable()
export class AppService {
  constructor(@Inject('TENANT') readonly tenant: ITenantContext) {
    // You can access tenant database here
  }

  /**
   * Get the default message
   *
   * @returns {string}
   * @memberof AppService
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Get the subdomain details
   *
   * @param {ITenantContext} tenant
   * @returns
   * @memberof AppService
   */
  getSubdomainDetails(subdomain: ITenantContext) {
    return `The domain that is referenced here is ${subdomain.id}`;
  }
}
