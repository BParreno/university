import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.remove(id);
  }

  @Get(':id/majors-subjects')
  async getStudentMajorsAndSubjects(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeMajors') includeMajors?: string,
    @Query('includeSubjects') includeSubjects?: string,
  ) {
    const includeMajorsBool = includeMajors === 'true' || includeMajors === undefined;
    const includeSubjectsBool = includeSubjects === 'true' || includeSubjects === undefined;

    return this.studentService.getStudentMajorsAndSubjects(
      id,
      includeMajorsBool,
      includeSubjectsBool,
    );
  }
}