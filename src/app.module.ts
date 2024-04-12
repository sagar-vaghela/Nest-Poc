import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SchoolController } from './school/school.controller';
import { SchoolService } from './school/school.service';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService],
})
export class AppModule {}
