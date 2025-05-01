import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateMajorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}