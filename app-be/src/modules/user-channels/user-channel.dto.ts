import { IsNotEmpty } from 'class-validator';

export class UserChannelDto {
  @IsNotEmpty()
  readonly userID: number;

  @IsNotEmpty()
  readonly channelUUID: number;
}
