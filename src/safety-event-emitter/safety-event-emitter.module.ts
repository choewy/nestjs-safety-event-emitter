import { DynamicModule, Module } from '@nestjs/common';

import { SafetyEventEmitter } from './safety-event.emitter';

@Module({})
export class SafetyEventEmitterModule {
  static forRoot(): DynamicModule {
    return {
      module: SafetyEventEmitterModule,
      providers: [SafetyEventEmitter],
      exports: [SafetyEventEmitter],
    };
  }
}
