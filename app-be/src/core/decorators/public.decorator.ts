import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Decorator determines whether path can be accessed by unauthorized user
 *
 * @see [NestJS/auth](https://docs.nestjs.com/security/authentication)
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
