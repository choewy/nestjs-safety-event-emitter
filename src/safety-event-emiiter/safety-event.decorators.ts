import { applyDecorators } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

export const OnSafetyEvent = (event: string) =>
  applyDecorators(OnEvent(event), (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const handler = descriptor.value;
    const metadataKeys = Reflect.getOwnMetadataKeys(descriptor.value);
    const metadataValues = metadataKeys.map((key) => {
      return [key, Reflect.getMetadata(key, descriptor.value)];
    });

    descriptor.value = async function (...args: any[]) {
      try {
        return await handler.bind(this)(...args);
      } catch (e) {
        return e;
      }
    };

    metadataValues.forEach(([key, value]) => Reflect.defineMetadata(key, value, descriptor.value));
  });
