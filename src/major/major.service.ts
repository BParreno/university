import { Injectable } from '@nestjs/common';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MajorService {
  constructor(private prisma: PrismaService) {}

  async create(createMajorDto: CreateMajorDto) {
    return this.prisma.major.create({
      data: createMajorDto,
    });
  }

  async findAll() {
    return this.prisma.major.findMany();
  }

  async findOne(id: number) {
    return this.prisma.major.findUnique({
      where: { id },
      include: { students: true, subjects: true, teachers: true },
    });
  }

  async update(id: number, updateMajorDto: UpdateMajorDto) {
    return this.prisma.major.update({
      where: { id },
      data: updateMajorDto,
    });
  }

  async remove(id: number) {
    return this.prisma.major.delete({
      where: { id },
    });
  }

  async getStudentMajorsAndSubjects(id: number) {
    return this.prisma.major.findUnique({ // Corregido a major
      where: { id },
      include: {
        students: {
          include: {
            student: true, // Incluye los detalles del estudiante
          },
        },
        subjects: {
          include: {
            subject: true, // Incluye los detalles de la materia
          },
        },
      },
    });
  }

  async getStudentsByMajor(
    id: number,
    includeStudents: boolean = true,
  ) {
    const include: any = {};
    if (includeStudents) {
      include.students = {
        include: {
          student: true,
        },
      };
    }
    return this.prisma.major.findUnique({
      where: { id },
      include,
    });
  }

  async getTeachersByMajor(
    id: number,
    includeTeachers: boolean = true,
  ) {
      const include: any = {};
      if (includeTeachers) {
          include.teachers = {
            include: {
              teacher: true
            }
          }
      }
    return this.prisma.major.findUnique({
      where: { id },
      include,
    });
  }
}
