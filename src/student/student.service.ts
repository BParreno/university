import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  async findAll() {
    return this.prisma.student.findMany();
  }

  async findOne(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
      include: { majors: true, subjects: true },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.student.delete({
      where: { id },
    });
  }

  async getStudentMajorsAndSubjects(
    id: number,
    includeMajors: boolean = true,
    includeSubjects: boolean = true,
  ) {
    const include: any = {}; // Usamos 'any' para mayor flexibilidad

    if (includeMajors) {
      include.majors = {
        include: {
          major: true,
        },
      };
    }
    if (includeSubjects) {
      include.subjects = {
        include: {
          subject: true,
        },
      };
    }

    return this.prisma.student.findUnique({
      where: { id },
      include,
    });
  }
}
