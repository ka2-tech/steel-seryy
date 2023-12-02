import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers';
import { AccountEntity } from '../entities';
import { UserService } from '../services';

@Module({
    imports: [TypeOrmModule.forFeature([AccountEntity])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
