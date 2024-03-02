import { Response } from 'express';

import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpException, InternalServerErrorException } from '@nestjs/common';

@Catch(HttpException, Error)
export class AppGlobalExceptionFilter extends BaseExceptionFilter {
  catch(e: Error | HttpException, host: ArgumentsHost): void {
    let httpException: HttpException;

    if (e instanceof HttpException) {
      httpException = e;
    } else {
      httpException = new InternalServerErrorException(e.message);
    }

    const http = host.switchToHttp();
    const res = http.getResponse<Response>();

    res.status(httpException.getStatus()).send(httpException.getResponse());
  }
}
