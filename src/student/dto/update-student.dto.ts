import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @IsOptional()
    @IsString()
    name?: string;
}