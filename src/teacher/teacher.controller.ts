// src/teacher/teacher.controller.ts
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
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleName } from '@prisma/client';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('teachers')
@UseGuards(RolesGuard)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @Roles(RoleName.ADMIN)
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  @Roles(RoleName.ADMIN)
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.teacherService.findAll(paginationDto);
  }

  @Get(':id')
  @Roles(RoleName.ADMIN, RoleName.TEACHER)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teacherService.findOne(id);
  }

  @Patch(':id')
  @Roles(RoleName.ADMIN)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  @Roles(RoleName.ADMIN)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.teacherService.remove(id);
  }

  @Post(':teacherId/assign-major/:majorId')
  @Roles(RoleName.ADMIN)
  async assignMajor(
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Param('majorId', ParseIntPipe) majorId: number,
  ) {
    return this.teacherService.assignTeacherToMajor(teacherId, majorId);
  }

  @Delete(':teacherId/remove-major/:majorId')
  @Roles(RoleName.ADMIN)
  async removeMajor(
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Param('majorId', ParseIntPipe) majorId: number,
  ) {
    return this.teacherService.removeTeacherFromMajor(teacherId, majorId);
  }

  @Post(':teacherId/assign-subject/:subjectId')
  @Roles(RoleName.ADMIN)
  async assignSubject(
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Param('subjectId', ParseIntPipe) subjectId: number,
  ) {
    return this.teacherService.assignTeacherToSubject(teacherId, subjectId);
  }

  @Delete(':teacherId/remove-subject/:subjectId')
  @Roles(RoleName.ADMIN)
  async removeSubject(
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Param('subjectId', ParseIntPipe) subjectId: number,
  ) {
    return this.teacherService.removeTeacherFromSubject(teacherId, subjectId);
  }

  @Post(':teacherId/assign-subject-and-major/:subjectId/:majorId')
  @Roles(RoleName.ADMIN)
  async assignSubjectAndMajorInTransaction(
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Param('subjectId', ParseIntPipe) subjectId: number,
    @Param('majorId', ParseIntPipe) majorId: number,
  ) {
    return this.teacherService.assignTeacherToSubjectAndMajorInTransaction(
      teacherId,
      subjectId,
      majorId,
    );
  }
}