import { Module } from '@nestjs/common';
import { MajorService } from './major.service';
import { MajorsController } from './major.controller';
import { PrismaService } from 'src/prisma/prisma.service'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [], // No se necesita importar otros módulos aquí a menos que MajorService dependa de ellos
  controllers: [MajorsController],
  providers: [MajorService, PrismaService], // PrismaService debe ser un provider
})
export class MajorsModule {}