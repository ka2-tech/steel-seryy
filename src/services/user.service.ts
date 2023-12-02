import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../entities/account.entity';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';
import { compare } from 'bcrypt';
import { UserResponseInterface } from '../types/userResponse.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly userRepository: Repository<AccountEntity>,
    ) {}

    generateJWT(user: AccountEntity): string {
        return sign(
            {
                id: user.id,
                email: user.email,
            },
            JWT_SECRET,
            { expiresIn: '60s' },
        );
    }

    buildUserResponse(user: AccountEntity): UserResponseInterface {
        return {
            user: {
                ...user,
                token: this.generateJWT(user),
            },
        };
    }

    async loginUser(loginUserDto): Promise<any> {
        const user = await this.userRepository.findOneBy({
            email: loginUserDto.email,
        });

        // const pwd = await compare(loginUserDto.password, user.password);

        // if (!user || !pwd) {
        //     throw new HttpException('Account not exist', HttpStatus.UNPROCESSABLE_ENTITY);
        // }

        return user;
    }

    async findById(id: number): Promise<AccountEntity> {
        return this.userRepository.findOneById(id);
    }
}
