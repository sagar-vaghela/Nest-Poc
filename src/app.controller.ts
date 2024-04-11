import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('/api/hello') // Specify the path here
  getHello(@Res() res: Response): void {
    console.log('Hello World');
    res.status(HttpStatus.OK).json({ message: 'Hello World' });
  }
}
