import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreteBookDto {
  @IsNotEmpty()
  title: string;

  @IsUrl()
  frontPage: string;

  @MaxLength(250)
  @MinLength(10)
  description: string;

  @IsNotEmpty()
  author: string;

  @IsUrl()
  src: string;

  @IsIn(['accion', 'terror', 'zzz'])
  genere: string;

  @IsInt()
  @Min(1)
  pages: number;
}
