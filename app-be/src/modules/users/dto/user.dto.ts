import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly GUID: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
  readonly nickname: string;
  readonly isAdmin: boolean;
  readonly isRootAdmin: boolean;
}
