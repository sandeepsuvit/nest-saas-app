import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

/**
 * Middleware to identify tenant context
 *
 * @export
 * @class TenantAwareMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class TenantAwareMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        // Extract from the request object
        const { subdomains, headers } = req;
        // let whiltelist = [];

        // Get the tenant id from header
        const tenantId = headers['X-TENANT-ID'] || headers['x-tenant-id'];

        if (!tenantId) {
            throw new HttpException('`X-TENANT-ID` not provided', HttpStatus.NOT_FOUND);
        }

        // Continue if there are no subdomains
        // if (!subdomains.length) {
        //     return next();
        // }

        // Get the list of whitelisted subdomains, `www` being default
        // whiltelist = process.env.WHITELIST_SUBDOMAINS ? process.env.WHITELIST_SUBDOMAINS.split(',') : ['www'];

        // Check if the subdomain exist in the whitelisted subdomains
        // const inWhitelist = whiltelist.some(w => subdomains.find(s => s === w) ? true : false);

        // if (inWhitelist) {
        //     return next();
        // }

        // Set the tenant id in the header
        // tslint:disable-next-line: no-string-literal
        req['tenantId'] = tenantId.toString();

        next();
    }
}
