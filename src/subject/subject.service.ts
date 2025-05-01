import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: createSubjectDto,
    });
  }

  async findAll() {
    return this.prisma.subject.findMany();
  }

  async findOne(id: number) {
    return this.prisma.subject.findUnique({
      where: { id },
      include: { majors: true, students: true, teachers: true },
    });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.prisma.subject.update({
      where: { id },
      data: updateSubjectDto,
    });
  }

  async remove(id: number) {
    return this.prisma.subject.delete({
      where: { id },
    });
  }

  async getStudentsBySubject(
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
    return this.prisma.subject.findUnique({
      where: { id },
      include,
    });
  }

  async getTeacherBySubject(id: number, includeTeacher: boolean = true) {
    const include: any = {};
      if(includeTeacher){
        include.teachers = {
          include: {
            teacher: true,
          },
        };
      }
    return this.prisma.subject.findUnique({
      where: { id },
      include,
    });
  }
}