import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from '../dto';
import { UserService } from '../services';

@ApiTags('users')
@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('users/login')
    @UsePipes(new ValidationPipe())
    async loginUser(@Body('') loginUserDto: LoginUserDto): Promise<any> {
        const users = await this.userService.loginUser(loginUserDto);
        return this.userService.buildUserResponse(users);
    }
}
