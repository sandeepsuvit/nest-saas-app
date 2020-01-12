import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from '../core/interfaces/user.interface';
import { ITenantContext } from './../core/interfaces/tenant-context.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @Inject('TENANT_CONTEXT') readonly tenantContext: ITenantContext,
        @Inject('USER_MODEL') private userModel: Model<IUser>,
    ) {
        Logger.debug(`Current tenant: ${this.tenantContext.id}`);
    }

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
