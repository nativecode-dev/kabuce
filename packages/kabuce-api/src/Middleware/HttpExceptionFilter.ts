import {
  Catch,
  PlatformContext,
  ExceptionFilterMethods,
  ResponseErrorObject,
} from "@tsed/common";

import { Exception } from "@tsed/exceptions";

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilterMethods {
  catch(exception: Exception, ctx: PlatformContext) {
    const { response, logger } = ctx;
    const error = this.mapError(exception);
    const headers = this.getHeaders(exception);

    logger.error({ error });
    response.setHeaders(headers).status(error.status).body(error);
  }

  mapError(error: any) {
    return {
      name: error.origin?.name || error.name,
      message: error.message,
      status: error.status || 500,
      errors: this.getErrors(error),
    };
  }

  protected getErrors(error: any) {
    return [error, error.origin]
      .filter(Boolean)
      .reduce(
        (errs, { errors }: ResponseErrorObject) => [...errs, ...(errors || [])],
        []
      );
  }

  protected getHeaders(error: any) {
    return [error, error.origin].filter(Boolean).reduce(
      (obj, { headers }: ResponseErrorObject) => ({
        ...obj,
        ...(headers || {}),
      }),
      {}
    );
  }
}
