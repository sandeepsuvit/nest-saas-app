import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@ApiUseTags("users")
@Controller('@tenant/:id/users')
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
    @Get()
    findAllUsers() {
        return this.userService.findAll();
    }
}
