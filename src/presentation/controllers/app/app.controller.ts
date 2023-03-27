import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  ok(): { status: string } {
    return {
      status: 'ok',
    };
  }
}
