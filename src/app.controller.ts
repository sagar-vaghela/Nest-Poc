import { Controller, Get } from '@nestjs/common';
import { School } from '@prisma/client';
import { PostService } from './school.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('api/school')
  async getPostById(): Promise<School> {
    return this.postService.getSchool();
  }
}
