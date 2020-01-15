import { IsEmail, IsNotEmpty } from "class-validator";

/**
 * Request object to create a new user
 *
 * @export
 * @class CreateUserDto
 */
export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}