import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreteBookDto } from './dto/bookDto';

@Controller('books')
export class BooksController {
  constructor(@Inject(BooksService) private booksService: BooksService) {}

  @Get()
  getAll() {
    return this.booksService.findAll();
  }

  @Post()
  createBook(@Body() book: CreteBookDto) {
    return this.booksService.create(book);
  }
}
