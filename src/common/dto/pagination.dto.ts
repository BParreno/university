// src/common/dto/pagination.dto.ts
import { IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Min(1) // La página mínima debe ser 1
  @Type(() => Number)
  page?: number = 1; // Por defecto, la página 1

  @IsOptional()
  @IsNumber()
  @Min(1) // El tamaño de página mínimo debe ser 1
  @Type(() => Number)
  pageSize?: number = 10; // Por defecto, 10 elementos por página
}