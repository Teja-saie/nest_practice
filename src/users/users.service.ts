import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/Models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async login(data) {
    try {
      const user = await this.userModel.findOne({
        where: { email: data.email, password: data.password },
      });
      console.log('User', user);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }
      return user;
    } catch (error) {
      throw new HttpException(
        error.message ?? 'Error while logging in',
        error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return this.userModel.findAll();
  }

  async signup(data) {
    const { name, email, password } = data;
    const user = new this.userModel();
    user.name = name;
    user.email = email;
    user.password = password;
    const returned = await user.save();
    return returned;
  }
}
