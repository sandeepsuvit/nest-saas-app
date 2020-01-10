import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../core/interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
        // @InjectModel('User') private readonly userModel: Model<IUser>,
    ) {}

    getHello(): string {
        return 'Hello World! from User Service';
    }
}
