import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { HandlersModule } from './handlers/handlers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SafetyEventEmitterModule } from './safety-event-emiiter/safety-event-emitter.module';

@Module({
  imports: [EventEmitterModule.forRoot(), SafetyEventEmitterModule.forRoot(), HandlersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
