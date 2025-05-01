import { Module } from '@nestjs/common';
import { MajorService } from './major.service';
import { MajorsController } from './major.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MajorsController],
  providers: [MajorService],
})
export class MajorsModule {}