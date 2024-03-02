import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { ExampleService } from 'src/example/example.service';

import { NestjsEventSubject } from './enums';

@Injectable()
export class NestjsEventHandlers {
  constructor(private readonly exampleService: ExampleService) {}

  @OnEvent(NestjsEventSubject.Ok)
  async onOk(): Promise<string> {
    return this.exampleService.ok('ok');
  }

  @OnEvent(NestjsEventSubject.Error)
  async onError(): Promise<void> {
    return this.exampleService.error(NestjsEventSubject.Error);
  }

  @OnEvent(NestjsEventSubject.Exception)
  async onException(): Promise<void> {
    return this.exampleService.exception(NestjsEventSubject.Error);
  }
}
