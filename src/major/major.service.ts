// src/major/major.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'; // Importa BadRequestException
import { PrismaService } from '../prisma/prisma.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { PaginationDto } from '../common/dto/pagination.dto'; // Importa el DTO de paginación actualizado

@Injectable()
export class MajorService {
  constructor(private prisma: PrismaService) {}

  async create(createMajorDto: CreateMajorDto) {
    const existingMajor = await this.prisma.major.findUnique({
      where: { name: createMajorDto.name },
    });
    if (existingMajor) {
      throw new BadRequestException('Major with this name already exists');
    }
    return this.prisma.major.create({ data: createMajorDto });
  }

  // --- MÉTODO findAll MODIFICADO para paginación robusta ---
  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page || 1;
    const pageSize = paginationDto.pageSize || 10;

    const skip = (page - 1) * pageSize;

    const [majors, totalItems] = await this.prisma.$transaction([
      this.prisma.major.findMany({
        take: pageSize,
        skip: skip,
      }),
      this.prisma.major.count(),
    ]);

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      data: majors,
      meta: {
        totalItems,
        itemCount: majors.length,
        itemsPerPage: pageSize,
        totalPages,
        currentPage: page,
        nextPage: page < totalPages ? page + 1 : null,
        previousPage: page > 1 ? page - 1 : null,
      },
    };
  }
  // --- FIN MÉTODO findAll MODIFICADO ---

  async findOne(id: number) {
    const major = await this.prisma.major.findUnique({ where: { id } });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found`);
    }
    return major;
  }

  async update(id: number, updateMajorDto: UpdateMajorDto) {
    const major = await this.prisma.major.findUnique({ where: { id } });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found`);
    }
    if (updateMajorDto.name && updateMajorDto.name !== major.name) {
      const existingMajor = await this.prisma.major.findUnique({
        where: { name: updateMajorDto.name },
      });
      if (existingMajor) {
        throw new BadRequestException('Major with this name already exists');
      }
    }
    return this.prisma.major.update({ where: { id }, data: updateMajorDto });
  }

  async remove(id: number) {
    const major = await this.prisma.major.findUnique({ where: { id } });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found`);
    }
    return this.prisma.major.delete({ where: { id } });
  }
}