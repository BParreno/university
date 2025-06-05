import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'; // Importamos el guard JWT
import { ConfigService } from '@nestjs/config'; // Importamos ConfigService

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración global de ValidationPipe para validación de DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Obtener Reflector y JwtAuthGuard para aplicar globalmente el guard
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // Obtener el puerto de las variables de entorno
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000; // Usa PORT de .env o 3000 por defecto
  await app.listen(port);
}
bootstrap();