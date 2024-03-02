import request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, INestApplication, InternalServerErrorException } from '@nestjs/common';

import { AppModule } from 'src/app.module';
import { AppGlobalExceptionFilter } from 'src/app.filter';
import { SafetyEventSubject } from 'src/handlers/enums';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new AppGlobalExceptionFilter());

    await app.init();
  });

  describe('nestjs event emitter', () => {
    it('(GET) /nestjs/ok - should be 200', () => {
      return request(app.getHttpServer()).get('/nestjs/ok').expect(200).expect(['ok']);
    });

    it('(GET) /nestjs/error - should be 200', () => {
      return request(app.getHttpServer()).get('/nestjs/error').expect(200).expect([null]);
    });

    it('(GET) /nestjs/exception - should be 200', () => {
      return request(app.getHttpServer()).get('/nestjs/exception').expect(200).expect([null]);
    });
  });

  describe('safery event emitter', () => {
    it('(GET) /safety/ok - should be 200', () => {
      return request(app.getHttpServer()).get('/safety/ok').expect(200).expect(['ok']);
    });

    it('(GET) /safety/error - should be 500', () => {
      return request(app.getHttpServer())
        .get('/safety/error')
        .expect(500)
        .expect(new InternalServerErrorException(SafetyEventSubject.Error).getResponse());
    });

    it('(GET) /safety/exception - should be 400', () => {
      return request(app.getHttpServer())
        .get('/safety/exception')
        .expect(400)
        .expect(new BadRequestException(SafetyEventSubject.Exception).getResponse());
    });
  });
});
