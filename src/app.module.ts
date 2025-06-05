import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { MajorsModule } from './major/major.module';
import { AuthModule } from './auth/auth.module'; // Importamos AuthModule
import { ConfigModule } from '@nestjs/config'; // Importamos ConfigModule

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Configura ConfigModule globalmente
    PrismaModule,
    AuthModule, // Importamos AuthModule
    SubjectModule,
    StudentModule,
    TeacherModule,
    MajorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}