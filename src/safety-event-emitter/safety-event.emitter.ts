import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { event } from 'eventemitter2';

@Injectable()
export class SafetyEventEmitter {
  constructor(private readonly eventEmitter: EventEmitter2) {}
  async emitAsync(event: string | symbol | event[], options?: { values?: any[]; ignoreError?: boolean }): Promise<any> {
    const errorOrValues = await this.eventEmitter.emitAsync(event, ...(options?.values ?? []));

    for (const errorOrValue of errorOrValues) {
      if (errorOrValue instanceof Error) {
        if (options?.ignoreError === true) {
          continue;
        }

        throw errorOrValue;
      }
    }

    return errorOrValues;
  }
}
