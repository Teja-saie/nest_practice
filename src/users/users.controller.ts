import { Controller, Get, Post, Request, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('login')
  login(@Request() req) {
    try {
      return this.usersService.login(req.body);
    } catch (error) {
      console.log('Error', error);
      throw new HttpException(
        error.message,
        error.getStatus ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('signup')
  signup(@Body() reqBody: { name: string; email: string; password: string }) {
    console.log('I am req body', reqBody);
    return this.usersService.signup(reqBody);
  }
}
