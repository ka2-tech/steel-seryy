import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    @ApiProperty({
        default: 'khaitkdev@gmail.com',
    })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({
        default: '123456',
    })
    @IsNotEmpty()
    readonly password: string;
}
