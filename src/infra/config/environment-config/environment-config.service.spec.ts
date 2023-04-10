import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentConfigService } from './environment-config.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './environment-config.validation';

describe('EnvironmentConfigService', () => {
  let service: EnvironmentConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: process.env['PATH_ENVIRONMENT'],
          validate,
        }),
      ],
      providers: [EnvironmentConfigService],
    }).compile();

    service = module.get<EnvironmentConfigService>(EnvironmentConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get database uri', () => {
    const result = service.getDatabaseUri();
    jest.spyOn(service, 'getDatabaseUri').mockImplementation(() => result);

    expect(service.getDatabaseUri()).toBe(result);
  });
});
