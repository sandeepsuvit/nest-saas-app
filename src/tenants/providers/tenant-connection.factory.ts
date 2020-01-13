import { Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import * as mongoose from 'mongoose';
import { TenantContext } from '../../core/models/tenant-context.model';
import { ITenantContext } from './../../core/interfaces/tenant-context.interface';
import { TenantConnection } from './tenant-connection';

// Tenant creation factory
export const TenantConnectionFactory = [
    {
        provide: 'TENANT_CONTEXT',
        scope: Scope.REQUEST,
        inject: [REQUEST],
        useFactory: (req: Request): ITenantContext => {
            const { tenantId } = req as any;
            return new TenantContext(tenantId);
        },
    },
    {
        provide: 'TENANT_CONNECTION',
        useFactory: async (context: ITenantContext, connection: TenantConnection): Promise<typeof mongoose>  => {
            // Set tenant context
            connection.tenantId = context.tenantId;

            // Return the connection
            return connection.getConnection();
        },
        inject: ['TENANT_CONTEXT', TenantConnection],
    },
];
