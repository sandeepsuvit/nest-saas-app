import { IsNotEmpty } from 'class-validator';

/**
 * Request object to create a new tenant
 *
 * @export
 * @class CreateTenantDto
 */
export class CreateTenantDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    uri: string;
}