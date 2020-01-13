import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  /**
   * Get the default message
   *
   * @returns {string}
   * @memberof AppService
   */
  getHello(): string {
    return 'Hello World!';
  }

}
