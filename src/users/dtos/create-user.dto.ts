import { ApiModelProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

/**
 * Request object to create a new user
 *
 * @export
 * @class CreateUserDto
 */
export class CreateUserDto {
    @ApiModelProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiModelProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}