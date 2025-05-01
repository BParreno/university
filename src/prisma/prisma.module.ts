import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Global } from '@nestjs/common'; // Opcional, para hacerlo global

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta el servicio para que otros módulos puedan usarlo
})
@Global() // Opcional: Marca el módulo como global para que no necesites importarlo en otros módulos
export class PrismaModule {}