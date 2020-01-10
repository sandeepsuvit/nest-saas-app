import { HttpException, HttpStatus, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import * as mongoose from 'mongoose';
import { databaseConfig } from '../../config/database.config';
import { TenantsService } from '../tenants.service';

// Connection switcher
export const TenantConnectionProviders = [
    {
        provide: 'TENANT_CONNECTION',
        scope: Scope.REQUEST,
        inject: [REQUEST, TenantsService],
        useFactory: async (req: Request, tenantService: TenantsService): Promise<typeof mongoose> => {
            // Get the tenant details from the database
            const tenant = await tenantService.findByName(req.params.id);

            if (!tenant) {
                throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
            }
            
            // Create or Return a mongo connection
            return mongoose.connect(`${tenant.uri}`, databaseConfig)
        },
    }
]