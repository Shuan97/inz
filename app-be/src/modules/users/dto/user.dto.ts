import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: Gender;
}

// export class UserDto {
//   @IsNotEmpty()
//   readonly GUID: string;

//   @IsNotEmpty()
//   readonly name: string;

//   @IsNotEmpty()
//   @IsEmail()
//   readonly email: string;

//   @IsNotEmpty()
//   @MinLength(6)
//   readonly password: string;
//   readonly nickname: string;
//   readonly isAdmin: boolean;
//   readonly isRootAdmin: boolean;
// }
