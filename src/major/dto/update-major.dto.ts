import { PartialType } from '@nestjs/mapped-types';
import { CreateMajorDto } from './create-major.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateMajorDto extends PartialType(CreateMajorDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}