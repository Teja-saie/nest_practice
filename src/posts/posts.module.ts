import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts } from 'src/Models/posts.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [SequelizeModule.forFeature([Posts])],
})
export class PostsModule {}
