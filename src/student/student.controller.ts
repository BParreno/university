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
  Req,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleName } from '@prisma/client';
import { PaginationDto } from '../common/dto/pagination.dto'; // ¡Nueva importación!

@Controller('students')
@UseGuards(RolesGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @Roles(RoleName.ADMIN)
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  @Roles(RoleName.ADMIN, RoleName.TEACHER)
  async findAll(@Query() paginationDto: PaginationDto) { // ¡Modificado!
    return this.studentService.findAll(paginationDto); // ¡Modificado!
  }

  @Get(':id')
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  @Roles(RoleName.ADMIN)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @Roles(RoleName.ADMIN)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.remove(id);
  }

  @Get(':id/majors-subjects')
  @Roles(RoleName.ADMIN, RoleName.STUDENT)
  async getStudentMajorsAndSubjects(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeMajors') includeMajors?: string,
    @Query('includeSubjects') includeSubjects?: string,
  ) {
    const includeMajorsBool = includeMajors === 'true' || includeMajors === undefined;
    const includeSubjectsBool = includeSubjects === 'true' || includeSubjects === undefined;
    return this.studentService.getStudentMajorsAndSubjects(id, includeMajorsBool, includeSubjectsBool);
  }
}