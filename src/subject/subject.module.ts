import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importamos PrismaModule

@Module({
  imports: [PrismaModule], // Se necesita importar PrismaModule
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}