import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return this.prisma.teacher.create({
      data: createTeacherDto,
    });
  }

  async findAll() {
    return this.prisma.teacher.findMany();
  }

  async findOne(id: number) {
    return this.prisma.teacher.findUnique({
      where: { id },
      include: { majors: true, subjects: true }, // Incluye las relaciones
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.prisma.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  async remove(id: number) {
    return this.prisma.teacher.delete({
      where: { id },
    });
  }
}