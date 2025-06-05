import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RoleName } from '@prisma/client'; // Importamos RoleName

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { email, password, role, studentId, teacherId } = createUserDto;

    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data: any = { // Usamos 'any' para el tipo de datos por la flexibilidad de conexiones
      email,
      password: hashedPassword,
      role: role || RoleName.STUDENT, // Asigna rol por defecto si no se especifica
    };

    if (studentId) {
      const existingStudent = await this.prisma.student.findUnique({ where: { id: studentId } });
      if (!existingStudent) {
        throw new BadRequestException('Student not found for the provided studentId');
      }
      const studentHasUser = await this.prisma.user.findUnique({ where: { studentId } });
      if (studentHasUser) {
        throw new BadRequestException('This student is already associated with a user account');
      }
      data.student = { connect: { id: studentId } };
    }

    if (teacherId) {
      const existingTeacher = await this.prisma.teacher.findUnique({ where: { id: teacherId } });
      if (!existingTeacher) {
        throw new BadRequestException('Teacher not found for the provided teacherId');
      }
      const teacherHasUser = await this.prisma.user.findUnique({ where: { teacherId } });
      if (teacherHasUser) {
        throw new BadRequestException('This teacher is already associated with a user account');
      }
      data.teacher = { connect: { id: teacherId } };
    }

    if (studentId && teacherId) {
        throw new BadRequestException('A user cannot be both a student and a teacher.');
    }

    const user = await this.prisma.user.create({ data });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user; // Excluimos la contraseña del resultado
    return result;
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: user.role }; // Sub es el ID del usuario
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}