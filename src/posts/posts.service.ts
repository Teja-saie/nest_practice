import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from 'src/Models/posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts)
    private postsModel: typeof Posts,
  ) {}

  getPosts(email: string) {
    return this.postsModel.findAll({ where: { email } });
  }

  getAllPosts() {
    return this.postsModel.findAll();
  }

  async createPost(data: any) {
    const { email, description, title } = data;
    console.log('I am data1', { email, description, title });
    return await this.postsModel.create({ email, description, title } as Posts);
  }

  updatePost(id: number, data: { title: string; description: string }) {
    return this.postsModel.update(data, { where: { id } });
  }

  deletePost(id: number) {
    return this.postsModel.destroy({ where: { id } });
  }

  deleteAll() {
    return this.postsModel.destroy({ truncate: true });
  }
}
