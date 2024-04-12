import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { School, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.SchoolWhereUniqueInput,
  ): Promise<School | null> {
    return this.prisma.school.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SchoolWhereUniqueInput;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput;
  }): Promise<School[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.school.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: Prisma.SchoolCreateInput): Promise<School> {
    return this.prisma.school.create({
      data,
    });
  }

  async getSchool(): Promise<School> {
    return this.prisma.school.findFirst({
      where: { id: 1 },
    });
  }
}
