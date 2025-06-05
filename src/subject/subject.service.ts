import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto'; // ¡Nueva importación!

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: createSubjectDto,
    });
  }

  async findAll({ limit, offset }: PaginationDto) { // ¡Modificado!
    return this.prisma.subject.findMany({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const subject = await this.prisma.subject.findUnique({
      where: { id },
      include: {
        majors: { include: { major: true } },
        students: { include: { student: true } },
        teachers: { include: { teacher: true } },
      },
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found.`);
    }
    return subject;
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    const existingSubject = await this.prisma.subject.findUnique({ where: { id } });
    if (!existingSubject) {
      throw new NotFoundException(`Subject with ID ${id} not found.`);
    }
    return this.prisma.subject.update({
      where: { id },
      data: updateSubjectDto,
    });
  }

  async remove(id: number) {
    const existingSubject = await this.prisma.subject.findUnique({ where: { id } });
    if (!existingSubject) {
      throw new NotFoundException(`Subject with ID ${id} not found.`);
    }
    return this.prisma.subject.delete({
      where: { id },
    });
  }

  async getStudentsBySubject(id: number, includeStudents: boolean = true) {
    const include: any = {};
    if (includeStudents) {
      include.students = {
        include: {
          student: true,
        },
      };
    }
    const subject = await this.prisma.subject.findUnique({
      where: { id },
      include,
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found.`);
    }
    return subject;
  }

  async getTeachersBySubject(id: number, includeTeachers: boolean = true) {
    const include: any = {};
    if (includeTeachers) {
      include.teachers = {
        include: {
          teacher: true,
        },
      };
    }
    const subject = await this.prisma.subject.findUnique({
      where: { id },
      include,
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${id} not found.`);
    }
    return subject;
  }
}