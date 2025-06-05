import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { RoleName } from '@prisma/client'; // Importamos RoleName

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RoleName[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    // Asegurarse de que 'user' y 'role' existan en el request
    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.role) {
      return false; // No hay usuario o rol, no puede activar
    }
    return requiredRoles.some((role) => user.role === role);
  }
}