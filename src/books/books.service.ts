import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/Schema/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private booksModel: Model<Book>) {}

  findAll() {
    return this.booksModel.find();
  }
}
