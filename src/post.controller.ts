import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('api/post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Post('api/post')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content } = postData;
    return this.postService.createPost({
      title,
      content,
    });
  }
}
