import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module'; // Importamos el módulo de Prisma
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importamos ConfigModule y ConfigService

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    ConfigModule, // Importamos ConfigModule para usar ConfigService
    JwtModule.registerAsync({
      imports: [ConfigModule], // Importamos ConfigModule aquí también
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Obtenemos el secreto de las variables de entorno
        signOptions: { expiresIn: '1h' }, // Token expira en 1 hora
      }),
      inject: [ConfigService], // Inyectamos ConfigService
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // Añadimos JwtStrategy a los providers
  exports: [AuthService], // Exportamos AuthService para que otros módulos lo puedan usar
})
export class AuthModule {}