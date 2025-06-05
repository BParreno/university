// src/common/dto/pagination.dto.ts
import { IsOptional, IsPositive, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  @Type(() => Number) // Asegura que el query param se convierta a número
  limit?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number) // Asegura que el query param se convierta a número
  offset?: number;
}