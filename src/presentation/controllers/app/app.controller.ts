import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  ok(): { app: string } {
    return {
      app: 'ok',
    };
  }
}
