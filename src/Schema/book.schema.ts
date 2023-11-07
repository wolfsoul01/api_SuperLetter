import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Book {
  @Prop({ unique: true, required: true, trim: true })
  title: string;

  @Prop({ required: true })
  frontPage: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, trim: true })
  author: string;

  @Prop({ default: 0 })
  like: number;

  @Prop({ default: 0 })
  dislike: number;

  @Prop({ required: true })
  src: string;

  @Prop({ required: true })
  genere: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
