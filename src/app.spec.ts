import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { medicine } from './mock';

describe('MadEpress Tests', () => {
  let app: INestApplication;
  let appService = { getHello: () => 'Hello World!' };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET hello world`, () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it(`/create medicine`, () => {
    return request(app.getHttpServer())
      .post('/medicines')
      .send(medicine)
      .expect(201);
  });

  it(`/find medicines`, () => {
    return request(app.getHttpServer())
      .get('/medicines/find')
      .query({ page: 1, limit: 10, type: 'allopathic' })
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
