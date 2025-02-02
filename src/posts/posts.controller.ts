import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts(@Req() req) {
    const email = req.headers.user;
    return this.postsService.getPosts(email);
  }

  @Get('all')
  getAllPosts(@Req() req) {
    const email = req.headers.user;
    return this.postsService.getAllPosts();
  }

  @Post('create')
  createPost(
    @Body() data: { title: string; description: string; email: string },
  ) {
    console.log('I am data', data);
    return this.postsService.createPost(data);
  }

  @Put('update/:id')
  updatePost(
    @Param('id') id: number,
    @Body() data: { title: string; description: string },
  ) {
    return this.postsService.updatePost(id, data);
  }

  @Delete('delete/:id')
  deletePost(@Param('id') id: number) {
    return this.postsService.deletePost(id);
  }

  @Delete('deleteAll')
  deleteAll() {
    return this.postsService.deleteAll();
  }
}
