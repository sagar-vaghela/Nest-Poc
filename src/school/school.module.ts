import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService],
})
export class SchoolModule {}
