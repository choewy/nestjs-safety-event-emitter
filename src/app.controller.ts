import { Controller, Get } from '@nestjs/common';

import { NestjsEventSubject, SafetyEventSubject } from './handlers/enums';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nestjs/ok')
  async sendNestjsOkEvent() {
    return this.appService.sendNestjsEvent(NestjsEventSubject.Ok);
  }

  @Get('nestjs/error')
  async sendNestjsErrorEvent() {
    return this.appService.sendNestjsEvent(NestjsEventSubject.Error);
  }

  @Get('nestjs/exception')
  async sendNestjsExceptionEvent() {
    return this.appService.sendNestjsEvent(NestjsEventSubject.Exception);
  }

  @Get('safety/ok')
  async sendSafetyOkEvent() {
    return this.appService.sendSafetyEvent(SafetyEventSubject.Ok);
  }

  @Get('safety/error')
  async sendSafetyErrorEvent() {
    return this.appService.sendSafetyEvent(SafetyEventSubject.Error);
  }

  @Get('safety/exception')
  async sendSafetyExceptionEvent() {
    return this.appService.sendSafetyEvent(SafetyEventSubject.Exception);
  }

  @Get('safety/error/ignore')
  async sendSafetyErrorIgnoreEvent() {
    return this.appService.sendSafetyEventWithErrorIgnore(SafetyEventSubject.Error);
  }

  @Get('safety/exception/ignore')
  async sendSafetyExceptionIgnoreEvent() {
    return this.appService.sendSafetyEventWithErrorIgnore(SafetyEventSubject.Exception);
  }
}
