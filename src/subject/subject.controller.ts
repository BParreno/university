// src/subject/subject.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleName } from '@prisma/client';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('subjects')
@UseGuards(RolesGuard)
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  @Roles(RoleName.ADMIN)
  async create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.subjectService.findAll(paginationDto);
  }

  @Get(':id')
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.findOne(id);
  }

  @Patch(':id')
  @Roles(RoleName.ADMIN)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ) {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  @Roles(RoleName.ADMIN)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.remove(id);
  }

  @Get(':id/students')
  @Roles(RoleName.ADMIN, RoleName.TEACHER)
  async getStudentsBySubject(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeStudents') includeStudents?: string,
  ) {
    const includeStudentsBool =
      includeStudents === 'true' || includeStudents === undefined;
    return this.subjectService.getStudentsBySubject(id, includeStudentsBool);
  }

  @Get(':id/teacher')
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  async getTeachersBySubject(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeTeachers') includeTeachers?: string,
  ) {
    const includeTeachersBool =
      includeTeachers === 'true' || includeTeachers === undefined;
    return this.subjectService.getTeachersBySubject(id, includeTeachersBool);
  }
}