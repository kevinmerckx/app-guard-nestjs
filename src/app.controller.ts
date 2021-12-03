import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AuthGuardConfig, AUTH_GUARD_CONFIG } from './guards/auth-guard';

@Controller()
export class AppController {
  @Get('guarded')
  guarded(): string {
    return 'This is open.';
  }

  @Get('open')
  @SetMetadata(AUTH_GUARD_CONFIG, { disabled: true } as AuthGuardConfig)
  open(): string {
    return 'This is open.';
  }
}
