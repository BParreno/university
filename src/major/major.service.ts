import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto'; // ¡Nueva importación!

@Injectable()
export class MajorService {
  constructor(private prisma: PrismaService) {}

  async create(createMajorDto: CreateMajorDto) {
    return this.prisma.major.create({
      data: createMajorDto,
    });
  }

  async findAll({ limit, offset }: PaginationDto) { // ¡Modificado!
    return this.prisma.major.findMany({
      take: limit, // Número de registros a tomar (límite)
      skip: offset, // Número de registros a saltar (desplazamiento)
    });
  }

  async findOne(id: number) {
    const major = await this.prisma.major.findUnique({
      where: { id },
      include: {
        students: { include: { student: true } },
        subjects: { include: { subject: true } },
        teachers: { include: { teacher: true } },
      },
    });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found.`);
    }
    return major;
  }

  async update(id: number, updateMajorDto: UpdateMajorDto) {
    const existingMajor = await this.prisma.major.findUnique({ where: { id } });
    if (!existingMajor) {
      throw new NotFoundException(`Major with ID ${id} not found.`);
    }
    return this.prisma.major.update({
      where: { id },
      data: updateMajorDto,
    });
  }

  async remove(id: number) {
    const existingMajor = await this.prisma.major.findUnique({ where: { id } });
    if (!existingMajor) {
      throw new NotFoundException(`Major with ID ${id} not found.`);
    }
    return this.prisma.major.delete({
      where: { id },
    });
  }

  async getStudentsByMajor(id: number, includeStudents: boolean = true) {
    const include: any = {};
    if (includeStudents) {
      include.students = {
        include: {
          student: true,
        },
      };
    }
    const major = await this.prisma.major.findUnique({
      where: { id },
      include,
    });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found.`);
    }
    return major;
  }

  async getTeachersByMajor(id: number, includeTeachers: boolean = true) {
    const include: any = {};
    if (includeTeachers) {
      include.teachers = {
        include: {
          teacher: true,
        },
      };
    }
    const major = await this.prisma.major.findUnique({
      where: { id },
      include,
    });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found.`);
    }
    return major;
  }
}