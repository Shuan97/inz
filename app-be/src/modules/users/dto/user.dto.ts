import { IsNotEmpty, MinLength, IsEmail, IsEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
  readonly nickname: string;

  @IsEmpty()
  readonly isAdmin: boolean;

  @IsEmpty()
  readonly isRootAdmin: boolean;
}
