import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITenant } from '../core/interfaces/tenant.interface';
import { CreateTenantDto } from './dtos/create-tenant.dto';

@Injectable()
export class TenantsService {
    constructor(
        @InjectModel('Tenant') private readonly tenantModel: Model<ITenant>,
    ) {}
    
    /**
     * Save tenant data
     *
     * @param {CreateTenantDto} createTenant
     * @returns {Promise<ITenant>}
     * @memberof TenantsService
     */
    async create(createTenant: CreateTenantDto): Promise<ITenant> {
        try {
            const dataToPersist = new this.tenantModel(createTenant);
            // Persist the data
            return await dataToPersist.save();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Find all tenants
     *
     * @returns {Promise<ITenant>}
     * @memberof TenantsService
     */
    async findAll(): Promise<ITenant> {
        return await this.tenantModel.find({});
    }
}
