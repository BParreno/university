// src/student/student.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'; // Importa BadRequestException
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  // --- MÉTODO findAll MODIFICADO para paginación robusta ---
  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page || 1;
    const pageSize = paginationDto.pageSize || 10;

    const skip = (page - 1) * pageSize;

    const [students, totalItems] = await this.prisma.$transaction([
      this.prisma.student.findMany({
        take: pageSize,
        skip: skip,
      }),
      this.prisma.student.count(),
    ]);

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      data: students,
      meta: {
        totalItems,
        itemCount: students.length,
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
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        majors: { include: { major: true } },
        subjects: { include: { subject: true } },
        user: true,
      },
    });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const existingStudent = await this.prisma.student.findUnique({ where: { id } });
    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    const existingStudent = await this.prisma.student.findUnique({ where: { id } });
    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }
    return this.prisma.student.delete({
      where: { id },
    });
  }

  async getStudentMajorsAndSubjects(
    id: number,
    includeMajors: boolean = true,
    includeSubjects: boolean = true,
  ) {
    const selectOptions: Prisma.StudentSelect = {
      id: true,
      name: true,
      user: { select: { email: true, role: true } },
    };

    if (includeMajors) {
      selectOptions.majors = {
        select: {
          major: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      };
    }

    if (includeSubjects) {
      selectOptions.subjects = {
        select: {
          subject: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      };
    }

    const student = await this.prisma.student.findUnique({
      where: { id },
      select: selectOptions,
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }

    const transformedStudent = {
      id: student.id,
      name: student.name,
      user: student.user,
      majors: (student.majors as unknown as { major: { id: number; name: string; } }[] | undefined)?.map(sm => sm.major) || [],
      subjects: (student.subjects as unknown as { subject: { id: number; name: string; } }[] | undefined)?.map(ss => ss.subject) || [],
    };

    return transformedStudent;
  }
}