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
import { MajorService } from './major.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleName } from '@prisma/client';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PaginationDto } from '../common/dto/pagination.dto'; // ¡Nueva importación!

@Controller('majors')
@UseGuards(RolesGuard)
export class MajorsController {
  constructor(private readonly majorService: MajorService) {}

  @Post()
  @Roles(RoleName.ADMIN)
  async create(@Body() createMajorDto: CreateMajorDto) {
    return this.majorService.create(createMajorDto);
  }

  @Get()
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  async findAll(@Query() paginationDto: PaginationDto) { // ¡Modificado!
    return this.majorService.findAll(paginationDto); // ¡Modificado!
  }

  @Get(':id')
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.majorService.findOne(id);
  }

  @Patch(':id')
  @Roles(RoleName.ADMIN)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMajorDto: UpdateMajorDto,
  ) {
    return this.majorService.update(id, updateMajorDto);
  }

  @Delete(':id')
  @Roles(RoleName.ADMIN)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.majorService.remove(id);
  }

  @Get(':id/majors-subjects')
  @Roles(RoleName.ADMIN, RoleName.STUDENT, RoleName.TEACHER)
  async getMajorSubjects(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.majorService.findOne(id);
  }

  @Get(':id/students')
  @Roles(RoleName.ADMIN, RoleName.TEACHER)
  async getStudentsByMajor(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeStudents') includeStudents?: string,
  ) {
    const includeStudentsBool =
      includeStudents === 'true' || includeStudents === undefined;
    return this.majorService.getStudentsByMajor(id, includeStudentsBool);
  }

  @Get(':id/teachers')
  @Roles(RoleName.ADMIN)
  async getTeachersByMajor(
    @Param('id', ParseIntPipe) id: number,
    @Query('includeTeachers') includeTeachers?: string,
  ) {
    const includeTeachersBool =
      includeTeachers === 'true' || includeTeachers === undefined;
    return this.majorService.getTeachersByMajor(id, includeTeachersBool);
  }
}