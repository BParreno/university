import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectDto } from './create-subject.dto';
    import { IsString, IsOptional } from 'class-validator';


export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
