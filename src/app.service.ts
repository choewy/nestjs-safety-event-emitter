import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { NestjsEventSubject, SafetyEventSubject } from './handlers/enums';
import { SafetyEventEmitter } from './safety-event-emiiter/safety-event.emitter';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2, private readonly safetyEventEmitter: SafetyEventEmitter) {}

  async sendNestjsEvent(event: NestjsEventSubject) {
    return this.eventEmitter.emitAsync(event);
  }

  async sendSafetyEvent(event: SafetyEventSubject) {
    return this.safetyEventEmitter.emitAsync(event);
  }
}
