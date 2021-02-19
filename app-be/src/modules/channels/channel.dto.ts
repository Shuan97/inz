import { IsNotEmpty } from 'class-validator';

export class ChannelDto {
  @IsNotEmpty()
  readonly name: string;
}
