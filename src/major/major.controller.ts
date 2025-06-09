// src/major/major.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { MajorService } from './major.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleName } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('majors')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class MajorsController {
  constructor(private readonly majorService: MajorService) {}

  @Post()
  @Roles(RoleName.ADMIN)
  create(@Body() createMajorDto: CreateMajorDto) {
    return this.majorService.create(createMajorDto);
  }

  @Get()
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  findAll(@Query() paginationDto: PaginationDto) {
    return this.majorService.findAll(paginationDto);
  }

  @Get(':id')
  @Roles(RoleName.ADMIN, RoleName.TEACHER, RoleName.STUDENT)
  findOne(@Param('id') id: string) {
    return this.majorService.findOne(+id);
  }

  @Patch(':id')
  @Roles(RoleName.ADMIN)
  update(@Param('id') id: string, @Body() updateMajorDto: UpdateMajorDto) {
    return this.majorService.update(+id, updateMajorDto);
  }

  @Delete(':id')
  @Roles(RoleName.ADMIN)
  remove(@Param('id') id: string) {
    return this.majorService.remove(+id);
  }
}