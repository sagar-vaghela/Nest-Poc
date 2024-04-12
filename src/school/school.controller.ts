import { Controller, Get } from '@nestjs/common';
import { School } from '@prisma/client';
import { SchoolService } from './school.service';

@Controller()
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get('api/school')
  async getPostById(): Promise<School> {
    return this.schoolService.getSchool();
  }
}
