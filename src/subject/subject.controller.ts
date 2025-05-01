import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  async create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  async findAll() {
    return this.subjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ) {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.remove(id);
  }

  @Get(':id/students')
  async getStudentsBySubject(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeStudents') includeStudents?: string,
  ) {
    const includeStudentsBool =
      includeStudents === 'true' || includeStudents === undefined;
    return this.subjectService.getStudentsBySubject(id, includeStudentsBool);
  }

  @Get(':id/teacher')
  async getTeacherBySubject(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeTeacher') includeTeacher?: string,
  ) {
    const includeTeacherBool =
      includeTeacher === 'true' || includeTeacher === undefined;
    return this.subjectService.getTeacherBySubject(id, includeTeacherBool);
  }
}
