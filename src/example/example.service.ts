import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  ok<T>(param?: T) {
    return param;
  }

  error(message?: string) {
    throw new Error(message);
  }

  exception(message?: string) {
    throw new BadRequestException(message);
  }
}
