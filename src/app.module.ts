import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './Models/user.model';
import { UsersModule } from './users/users.module';
import { Posts } from './Models/posts.model';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'first_db',
      autoLoadModels: true,
      synchronize: true,
      models: [User, Posts],
    }),
    UsersModule,
    SequelizeModule.forFeature([User, Posts]),
    PostsModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
