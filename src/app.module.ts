import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    BooksModule,
  ],
})
export class AppModule {}

