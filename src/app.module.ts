import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostService } from './school.service';
import { PostController } from './app.controller';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class SchoolModule {}
