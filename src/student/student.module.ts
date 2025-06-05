import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importamos PrismaModule

@Module({
  imports: [PrismaModule], // Se necesita importar PrismaModule para que StudentService use PrismaService
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}