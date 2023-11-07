import { Controller, Get, Inject, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(@Inject(BooksService) private booksService: BooksService) {}

  @Get()
  getAll() {
    return this.booksService.findAll();
  }

}
