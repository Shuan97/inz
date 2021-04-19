import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Decorator determines whether path can be accessed by unauthorized user
 *
 * Learn more - [NestJS/auth](https://docs.nestjs.com/security/authentication#enable-authentication-globally)
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
