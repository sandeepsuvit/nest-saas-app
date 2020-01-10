import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from '../core/interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
    
    constructor(
        @Inject('USER_MODEL') private userModel: Model<IUser>
    ) {}

    /**
     * Create a new user
     *
     * @param {CreateUserDto} user
     * @returns {Promise<IUser>}
     * @memberof UsersService
     */
    async create(user: CreateUserDto): Promise<IUser> {
        try {
            const dataToPersist = new this.userModel(user);
            // Persist the data
            return await dataToPersist.save();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }


    /**
     * Get the list of all users
     *
     * @returns {Promise<IUser>}
     * @memberof UsersService
     */
    async findAll(): Promise<IUser> {
        return await this.userModel.find({});
    }
}
