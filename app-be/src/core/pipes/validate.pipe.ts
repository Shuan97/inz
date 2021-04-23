import {
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';

/**
 * Used to validate all endpoints with DTO using class-validator
 */
@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new UnprocessableEntityException(this.handleError(e));
      }
    }
  }

  //   private handleError(error) {
  //     console.dir(error.response.message);
  //     return error;
  //   }
  private handleError(errors) {
    return errors.response.message.map((error) => error);
    // return errors.map((error) => error.constraints);
  }
}
