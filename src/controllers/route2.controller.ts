
import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AuthGuardConfig, AUTH_GUARD_CONFIG } from '../guards/auth-guard';

@Controller('route2')
export class Route2Controller {
  @Get()
  @SetMetadata(AUTH_GUARD_CONFIG, { disabled: true } as AuthGuardConfig)
  open(): string {
    return 'This is open.';
  }
}
