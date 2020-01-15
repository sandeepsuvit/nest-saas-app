import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTenantDto } from './dtos/create-tenant.dto';
import { TenantsService } from './tenants.service';

@ApiTags('tenants')
@Controller('tenants')
export class TenantsController {
    constructor(
        private tenantService: TenantsService,
    ) {}

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() tenant: CreateTenantDto) {
        return this.tenantService.create(tenant);
    }

    @Get()
    @ApiResponse({ status: 200 })
    async findAll() {
        return this.tenantService.findAll();
    }
}
