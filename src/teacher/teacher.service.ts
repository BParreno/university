import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto } from '../common/dto/pagination.dto'; // ¡Nueva importación!

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return this.prisma.teacher.create({
      data: createTeacherDto,
    });
  }

  async findAll({ limit, offset }: PaginationDto) { // ¡Modificado!
    return this.prisma.teacher.findMany({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const teacher = await this.prisma.teacher.findUnique({
      where: { id },
      include: {
        majors: { include: { major: true } },
        subjects: { include: { subject: true } },
        user: true,
      },
    });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found.`);
    }
    return teacher;
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const existingTeacher = await this.prisma.teacher.findUnique({
      where: { id },
    });
    if (!existingTeacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found.`);
    }
    return this.prisma.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  async remove(id: number) {
    const existingTeacher = await this.prisma.teacher.findUnique({
      where: { id },
    });
    if (!existingTeacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found.`);
    }
    return this.prisma.teacher.delete({
      where: { id },
    });
  }

  async assignTeacherToMajor(teacherId: number, majorId: number) {
    const [teacher, major] = await Promise.all([
      this.prisma.teacher.findUnique({ where: { id: teacherId } }),
      this.prisma.major.findUnique({ where: { id: majorId } }),
    ]);

    if (!teacher)
      throw new NotFoundException(`Teacher with ID ${teacherId} not found.`);
    if (!major)
      throw new NotFoundException(`Major with ID ${majorId} not found.`);

    const existingAssignment = await this.prisma.teacherMajor.findUnique({
      where: { teacherId_majorId: { teacherId, majorId } },
    });

    if (existingAssignment) {
      throw new BadRequestException(
        `Teacher ${teacherId} is already assigned to Major ${majorId}.`,
      );
    }

    return this.prisma.teacherMajor.create({
      data: {
        teacherId,
        majorId,
      },
    });
  }

  async removeTeacherFromMajor(teacherId: number, majorId: number) {
    const existingAssignment = await this.prisma.teacherMajor.findUnique({
      where: { teacherId_majorId: { teacherId, majorId } },
    });

    if (!existingAssignment) {
      throw new NotFoundException(
        `Assignment of teacher ${teacherId} to major ${majorId} not found.`,
      );
    }

    return this.prisma.teacherMajor.delete({
      where: { teacherId_majorId: { teacherId, majorId } },
    });
  }

  async assignTeacherToSubject(teacherId: number, subjectId: number) {
    const [teacher, subject] = await Promise.all([
      this.prisma.teacher.findUnique({ where: { id: teacherId } }),
      this.prisma.subject.findUnique({ where: { id: subjectId } }),
    ]);

    if (!teacher)
      throw new NotFoundException(`Teacher with ID ${teacherId} not found.`);
    if (!subject)
      throw new NotFoundException(`Subject with ID ${subjectId} not found.`);

    const existingAssignment = await this.prisma.teacherSubject.findUnique({
      where: { teacherId_subjectId: { teacherId, subjectId } },
    });

    if (existingAssignment) {
      throw new BadRequestException(
        `Teacher ${teacherId} is already assigned to Subject ${subjectId}.`,
      );
    }

    return this.prisma.teacherSubject.create({
      data: {
        teacherId,
        subjectId,
      },
    });
  }

  async removeTeacherFromSubject(teacherId: number, subjectId: number) {
    const existingAssignment = await this.prisma.teacherSubject.findUnique({
      where: { teacherId_subjectId: { teacherId, subjectId } },
    });

    if (!existingAssignment) {
      throw new NotFoundException(
        `Assignment of teacher ${teacherId} to subject ${subjectId} not found.`,
      );
    }

    return this.prisma.teacherSubject.delete({
      where: { teacherId_subjectId: { teacherId, subjectId } },
    });
  }

  // ¡NUEVO MÉTODO TRANSACCIONAL!
  async assignTeacherToSubjectAndMajorInTransaction(
    teacherId: number,
    subjectId: number,
    majorId: number,
  ) {
    // 1. Verificar si existen el profesor, la materia y la carrera
    const [teacher, subject, major] = await Promise.all([
      this.prisma.teacher.findUnique({ where: { id: teacherId } }),
      this.prisma.subject.findUnique({ where: { id: subjectId } }),
      this.prisma.major.findUnique({ where: { id: majorId } }),
    ]);

    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found.`);
    }
    if (!subject) {
      throw new NotFoundException(`Subject with ID ${subjectId} not found.`);
    }
    if (!major) {
      throw new NotFoundException(`Major with ID ${majorId} not found.`);
    }

    // 2. Verificar si las asignaciones ya existen para evitar duplicados
    const [existingSubjectAssignment, existingMajorAssignment] =
      await Promise.all([
        this.prisma.teacherSubject.findUnique({
          where: { teacherId_subjectId: { teacherId, subjectId } },
        }),
        this.prisma.teacherMajor.findUnique({
          where: { teacherId_majorId: { teacherId, majorId } },
        }),
      ]);

    if (existingSubjectAssignment) {
      throw new BadRequestException(
        `Teacher ${teacherId} is already assigned to Subject ${subjectId}.`,
      );
    }
    if (existingMajorAssignment) {
      throw new BadRequestException(
        `Teacher ${teacherId} is already assigned to Major ${majorId}.`,
      );
    }

    // 3. Ejecutar ambas asignaciones dentro de una transacción
    // Si alguna de estas operaciones falla, ambas se revertirán.
    return this.prisma.$transaction([
      this.prisma.teacherSubject.create({
        data: {
          teacherId,
          subjectId,
        },
      }),
      this.prisma.teacherMajor.create({
        data: {
          teacherId,
          majorId,
        },
      }),
    ]);
  }
}