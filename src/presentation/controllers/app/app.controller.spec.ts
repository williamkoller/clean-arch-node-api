import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    controller = moduleFixture.get<AppController>(AppController);
  });
  it('should defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call method ok()', () => {
    jest.spyOn(controller, 'ok');
    expect(controller.ok()).toEqual({ status: 'ok' });
    expect(controller.ok).toBeCalledTimes(1);
  });
});
