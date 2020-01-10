import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

/**
 * Request object to create a new tenant
 *
 * @export
 * @class CreateTenantDto
 */
export class CreateTenantDto {
    @ApiModelProperty()
    @IsNotEmpty()
    name: string;

    @ApiModelProperty()
    @IsNotEmpty()
    uri: string;
}