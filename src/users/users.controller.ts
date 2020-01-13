import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiImplicitHeader, ApiUseTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) {}

    /**
     * Create new user
     *
     * @param {CreateUserDto} user
     * @returns
     * @memberof UsersController
     */
    @ApiImplicitHeader({ name: 'X-TENANT-ID', description: 'Tenant ID' })
    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    /**
     * Find the list of users
     *
     * @returns
     * @memberof UsersController
     */
    @ApiImplicitHeader({ name: 'X-TENANT-ID', description: 'Tenant ID' })
    @Get()
    findAllUsers() {
        return this.userService.findAll();
    }
}
