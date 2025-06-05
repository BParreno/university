import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Prisma } from '@prisma/client'; // Importación necesaria para tipos de Prisma

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      data: createStudentDto,
    });
  }

  async findAll({ limit, offset }: PaginationDto) {
    return this.prisma.student.findMany({
      take: limit,
      skip: offset,
    });
  }

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

  // ¡Modificado para la "vista" con manejo de tipos más robusto usando 'unknown'!
  async getStudentMajorsAndSubjects(
    id: number,
    includeMajors: boolean = true,
    includeSubjects: boolean = true,
  ) {
    // Definimos el objeto select de forma dinámica
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

    // Realizamos la consulta con el objeto select dinámico
    const student = await this.prisma.student.findUnique({
      where: { id },
      select: selectOptions,
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }

    // Ahora, transformamos los datos. Utilizaremos 'as unknown as Type'
    // para decirle a TypeScript que confíe en que la estructura es la que esperamos.
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