import { IsNotEmpty } from 'class-validator';

export class UserChannelDto {
  @IsNotEmpty()
  readonly userUUID: string;

  @IsNotEmpty()
  readonly channelUUID: string;
}
