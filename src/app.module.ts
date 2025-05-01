import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { MajorModule } from './major/major.module';

@Module({
  imports: [PrismaModule, SubjectModule, StudentModule, TeacherModule, MajorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
