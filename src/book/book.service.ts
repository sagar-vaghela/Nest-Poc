import { PrismaService } from 'src/prisma.service';
import { Book } from './book.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getAllBook(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async getBook(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async createBook(data: Book): Promise<Book> {
    return this.prisma.book.create({
      data,
    });
  }
}
