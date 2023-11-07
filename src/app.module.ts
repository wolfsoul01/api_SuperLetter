import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@atlascluster.timmrwo.mongodb.net/SuperLetterDB',
    ),
    BooksModule,
  ],
})
export class AppModule {}
