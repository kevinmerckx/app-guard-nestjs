import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export interface AuthGuardConfig {
  disabled?: boolean;
}

export const AUTH_GUARD_CONFIG = Symbol('AUTH_GUARD_CONFIG');

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const handlerConfig = this.reflector.get<AuthGuardConfig>(
      AUTH_GUARD_CONFIG,
      context.getHandler(),
    );
    const controllerConfig = this.reflector.get<AuthGuardConfig>(
      AUTH_GUARD_CONFIG,
      context.getClass(),
    );
    if (controllerConfig?.disabled || handlerConfig?.disabled) {
      return true;
    }
    return false;
  }
}
