import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';

@Module({
  providers: [ExampleService],
  exports: [ExampleService],
})
export class ExampleModule {}
