import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { databaseConfig } from '../../config/database.config';
import { ITenant } from '../../core/interfaces/tenant.interface';
import { TenantsService } from '../tenants.service';

/**
 * Create tenant connections
 *
 * @export
 * @class TenantConnection
 */
@Injectable()
export class TenantConnection {
    private readonly CONNECTION_NAME_PREFIX = process.env.TENANT_DB_PREFIX;
    // tslint:disable-next-line: variable-name
    private _tenantId: string;

    constructor(
        private tenantService: TenantsService,
    ) {}

    /**
     * Set the context of the tenant
     *
     * @memberof TenantConnection
     */
    set tenantId(tenantId: string) {
        this._tenantId = tenantId;
    }

    /**
     * Get the connection details
     *
     * @param {ITenant} tenant
     * @returns
     * @memberof TenantConnection
     */
    async getConnection(): Connection {

        // Get the tenant details from the database
        const tenant = await this.tenantService.findByName(this._tenantId);

        // Validation check if tenant exist
        if (!tenant) {
            throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
        }

        // Get the underlying mongoose connections
        const connections: Connection[] = mongoose.connections;

        // Find existing connection
        const foundConn = connections.find((con: Connection) => {
            return con.name === `${this.CONNECTION_NAME_PREFIX}_${tenant.name}`;
        });

        // Check if connection exist and is ready to execute
        if (foundConn && foundConn.readyState === 1) {
            return foundConn;
        }

        // Create a new connection
        return await this.createConnection(tenant);
    }

    /**
     * Create new connection
     *
     * @private
     * @param {ITenant} tenant
     * @returns {Connection}
     * @memberof TenantConnection
     */
    private async createConnection(tenant: ITenant): Promise<Connection> {
        // Create or Return a mongo connection
        return await mongoose.createConnection(`${tenant.uri}`, databaseConfig);
    }
}
