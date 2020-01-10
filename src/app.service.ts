import { Injectable } from '@nestjs/common';
import { ITenant } from './interfaces/tenant.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Get the subdomain details
   *
   * @param {ITenant} tenant
   * @returns
   * @memberof AppService
   */
  getSubdomainDetails(subdomain: ITenant) {
    return `The domain that is referenced here is ${subdomain.id}`;
  }
}
