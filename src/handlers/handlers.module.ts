import { Module } from '@nestjs/common';

import { NestjsEventHandlers } from './nestjs-event.handlers';
import { SafetyEventHandlers } from './safety-event.handlers';
import { ExampleModule } from 'src/example/example.module';

@Module({
  imports: [ExampleModule],
  providers: [NestjsEventHandlers, SafetyEventHandlers],
})
export class HandlersModule {}
