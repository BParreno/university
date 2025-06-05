import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importamos PrismaModule

@Module({
  imports: [PrismaModule], // Se necesita importar PrismaModule
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}