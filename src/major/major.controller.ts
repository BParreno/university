import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { MajorService } from './major.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';

@Controller('majors')
export class MajorsController {
  constructor(private readonly majorService: MajorService) {}

  @Post()
  async create(@Body() createMajorDto: CreateMajorDto) {
    return this.majorService.create(createMajorDto);
  }

  @Get()
  async findAll() {
    return this.majorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.majorService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMajorDto: UpdateMajorDto,
  ) {
    return this.majorService.update(id, updateMajorDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.majorService.remove(id);
  }

  @Get(':id/majors-subjects')
  async getStudentMajorsAndSubjects(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeMajors') includeMajors?: string,
    @Query('includeSubjects') includeSubjects?: string,
  ) {
    const includeMajorsBool = includeMajors === 'true' || includeMajors === undefined;
    const includeSubjectsBool = includeSubjects === 'true' || includeSubjects === undefined;

    return this.majorService.getStudentMajorsAndSubjects(id); // Corregido: solo pasar el ID
  }

  @Get(':id/students')
  async getStudentsByMajor(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeStudents') includeStudents?: string,
  ) {
    const includeStudentsBool =
      includeStudents === 'true' || includeStudents === undefined;
    return this.majorService.getStudentsByMajor(id, includeStudentsBool);
  }

  @Get(':id/teachers')
  async getTeachersByMajor(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeTeachers') includeTeachers?: string,
  ) {
    const includeTeachersBool = includeTeachers === 'true' || includeTeachers === undefined;
    return this.majorService.getTeachersByMajor(id, includeTeachersBool);
  }
}
