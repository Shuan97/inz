import { User } from './../users/user.entity';
import { IsNotEmpty } from 'class-validator';

export class ChannelDto {
  @IsNotEmpty()
  readonly name: string;

  users: User[];
}
