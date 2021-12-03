
import { Controller, Get } from '@nestjs/common';

@Controller('route1')
export class Route1Controller {
  @Get()
  open(): string {
    return 'This is closed.';
  }
}
