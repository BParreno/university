// src/subject/subject.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'; // Importa BadRequestException
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: createSubjectDto,
    });
  }

  // --- MÉTODO findAll MODIFICADO para paginación robusta ---
  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page || 1;
    const pageSize = paginationDto.pageSize || 10;

    const skip = (page - 1) * pageSize;

    const [subjects, totalItems] = await this.prisma.$transaction([
      this.prisma.subject.findMany({
        take: pageSize,
        skip: skip,
      }),
      this.prisma.subject.count(),
    ]);

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      data: subjects,
      meta: {
        totalItems,
        itemCount: subjects.length,
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