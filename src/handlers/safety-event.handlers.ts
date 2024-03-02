import { Injectable } from '@nestjs/common';

import { OnSafetyEvent } from 'src/safety-event-emitter/safety-event.decorators';
import { ExampleService } from 'src/example/example.service';

import { SafetyEventSubject } from './enums';

@Injectable()
export class SafetyEventHandlers {
  constructor(private readonly exampleService: ExampleService) {}

  @OnSafetyEvent(SafetyEventSubject.Ok)
  async onOk(): Promise<string> {
    return this.exampleService.ok('ok');
  }

  @OnSafetyEvent(SafetyEventSubject.Error)
  async onError(): Promise<void> {
    return this.exampleService.error(SafetyEventSubject.Error);
  }

  @OnSafetyEvent(SafetyEventSubject.Exception)
  async onException(): Promise<void> {
    return this.exampleService.exception(SafetyEventSubject.Exception);
  }
}
