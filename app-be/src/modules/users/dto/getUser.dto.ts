import { IsNotEmpty, IsEmail, IsEmpty } from 'class-validator';

export class GetUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  readonly nickname: string;

  @IsEmpty()
  readonly isAdmin: boolean;

  @IsEmpty()
  readonly isRootAdmin: boolean;
}
