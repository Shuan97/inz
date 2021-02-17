import { IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  readonly body: string;
}
