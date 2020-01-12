import { Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import * as mongoose from 'mongoose';
import { ITenantContext } from './../../core/interfaces/tenant-context.interface';
import { TenantConnection } from './tenant-connection';

// Tenant creation factory
export const TenantConnectionFactory = [
    {
        provide: 'TENANT_CONTEXT',
        scope: Scope.REQUEST,
        inject: [REQUEST],
        useFactory: (req: Request): ITenantContext | any => {
            // TODO: Get the subdomain information from `req.headers.host.split(".")[0]`
            return req.params;
        },
    },
    {
        provide: 'TENANT_CONNECTION',
        useFactory: async (context: ITenantContext, connection: TenantConnection): Promise<typeof mongoose>  => {
            // Set tenant context
            connection.tenantId = context.id;

            // Return the connection
            return connection.getConnection();
        },
        inject: ['TENANT_CONTEXT', TenantConnection],
    },
];
