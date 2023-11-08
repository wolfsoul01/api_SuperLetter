import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/Schema/book.schema';
import { CreteBookDto } from './dto/bookDto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private booksModel: Model<Book>) {}

  findAll() {
    return this.booksModel.find();
  }

  create(book: CreteBookDto) {
    const newBook = new this.booksModel(book);

    newBook.save();
  }
}
