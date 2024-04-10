import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Book } from './book.model';
import { BookService } from './book.service';
import { Request, Response } from 'express';

@Controller('api/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBook(@Req() _: Request, @Res() response: Response): Promise<any> {
    const result = await this.bookService.getAllBook();
    return response.status(200).json({
      status: 'Ok!',
      message: 'Successfully fetch data!',
      result: result,
    });
  }

  @Post()
  async postBook(@Body() postData: Book): Promise<Book> {
    return this.bookService.createBook(postData);
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book | null> {
    return this.bookService.getBook(id);
  }
}
